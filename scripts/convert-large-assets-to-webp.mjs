#!/usr/bin/env node
/**
 * Rasterize static assets to WebP (max width + quality).
 *
 * Modes (can combine):
 *   Default: PNG/JPEG/SVG only if file size ≥ MIN_BYTES (default 2 MiB).
 *   --content-svg: Also convert every SVG under public/ except logos / icons / hotel marks (any size).
 *
 * Usage:
 *   node scripts/convert-large-assets-to-webp.mjs
 *   node scripts/convert-large-assets-to-webp.mjs --write
 *   node scripts/convert-large-assets-to-webp.mjs --write --content-svg
 *
 * Env: MIN_BYTES, MAX_WIDTH, WEBP_QUALITY
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { Resvg } from '@resvg/resvg-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

const MIN_BYTES = Number(process.env.MIN_BYTES ?? 2 * 1024 * 1024);
const MAX_WIDTH = Number(process.env.MAX_WIDTH ?? 1920);
const WEBP_QUALITY = Number(process.env.WEBP_QUALITY ?? 85);

const EXT = new Set(['.png', '.jpg', '.jpeg', '.svg']);

const write = process.argv.includes('--write');
const contentSvgMode = process.argv.includes('--content-svg');

/** Paths relative to public/ — keep as SVG (logos, UI icons, partner marks). */
const SKIP_SVG_RELPATHS = new Set([
  'logoBlue.svg',
  'logoWhite.svg',
  'syGroup.svg',
  'favicon.svg',
  'icons.svg',
  'assets/images/building.svg',
  'assets/images/hook.svg',
  'assets/images/document.svg',
  'assets/images/hyattCentric.svg',
  'assets/images/ihcl.svg',
  'assets/images/marriott.svg',
  'assets/images/wyndham.svg',
  'assets/images/syInfra.svg',
  'assets/images/tulsi.svg',
]);

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

function relFromPublic(absPath) {
  return path.relative(PUBLIC, absPath).split(path.sep).join('/');
}

async function toWebpFromSharp(inputPath, outPath) {
  await sharp(inputPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toFile(outPath);
}

async function toWebpFromSvgResvg(inputPath, outPath) {
  const buf = fs.readFileSync(inputPath);
  const resvg = new Resvg(buf, {
    fitTo: { mode: 'width', value: MAX_WIDTH },
  });
  const png = resvg.render().asPng();
  await sharp(png)
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toFile(outPath);
}

async function convertFile(absPath) {
  const ext = path.extname(absPath).toLowerCase();
  if (!EXT.has(ext)) return { skipped: true, reason: 'extension' };

  const outPath = absPath.slice(0, -ext.length) + '.webp';

  if (ext === '.svg') {
    try {
      await toWebpFromSharp(absPath, outPath);
      return { ok: true, via: 'sharp-svg' };
    } catch {
      try {
        await toWebpFromSvgResvg(absPath, outPath);
        return { ok: true, via: 'resvg-svg' };
      } catch (e) {
        return { ok: false, error: e.message };
      }
    }
  }

  try {
    await toWebpFromSharp(absPath, outPath);
    return { ok: true, via: `sharp-${ext.slice(1)}` };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

function shouldProcess(absPath) {
  const ext = path.extname(absPath).toLowerCase();
  const stat = fs.statSync(absPath);
  const relPub = relFromPublic(absPath);

  if (ext === '.svg') {
    if (SKIP_SVG_RELPATHS.has(relPub)) return { no: 'skipped (logo/icon/brand svg)' };
    if (contentSvgMode) return { yes: true };
    if (stat.size >= MIN_BYTES) return { yes: true };
    return { no: 'under min size (use --content-svg for small illustrative svgs)' };
  }

  if (stat.size >= MIN_BYTES) return { yes: true };
  return { no: 'under min size' };
}

async function main() {
  const files = walk(PUBLIC).filter((p) => EXT.has(path.extname(p).toLowerCase()));
  const dryRows = [];

  for (const abs of files) {
    const decision = shouldProcess(abs);
    if (!decision.yes) continue;

    const rel = path.relative(ROOT, abs);
    const stat = fs.statSync(abs);
    const out = abs.slice(0, -path.extname(abs).length) + '.webp';

    if (!write) {
      dryRows.push({ rel, size: stat.size, out: path.relative(ROOT, out) });
      continue;
    }

    const r = await convertFile(abs);
    if (r.skipped) continue;
    if (!r.ok) {
      console.error(`FAIL ${rel}: ${r.error}`);
      continue;
    }
    const outStat = fs.statSync(out);
    console.log(`OK ${rel} → ${path.relative(ROOT, out)} (${stat.size} → ${outStat.size} bytes, ${r.via})`);
  }

  if (!write) {
    const label = contentSvgMode
      ? 'large files + all non-skipped SVGs'
      : `files ≥ ${(MIN_BYTES / 1024 / 1024).toFixed(1)} MiB`;
    console.log(`Dry run — ${dryRows.length} file(s) (${label}). Use --write to generate WebP.\n`);
    for (const { rel, size, out } of dryRows) {
      console.log(`${(size / 1024).toFixed(1)} KiB  ${rel}  →  ${out}`);
    }
    if (!contentSvgMode) {
      console.log('\nTip: add --content-svg to convert remaining illustrative SVGs (icons/logos stay SVG).');
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
