import React from "react";
import { useNavigate } from "react-router-dom";
import { colors, fonts, strings } from "../../../utils";

type BHKOption =
  | { val: string; label: string; isText?: false }
  | { val: string; label: string; isText: true };

export type ProjectListItemData = {
  id: string; // used as slug for routing
  title: string; // small blue title
  subtitle: string; // big heading
  imageSrc: string;
  unitsAvailableLabel?: string; // defaults to strings.projects.unitsAvailable
  bhkOptions?: BHKOption[]; // defaults to strings.projects.bhkOptions
  startingFromLabel?: string; // defaults to strings.projects.startingFrom
  priceNum: string;
  priceText: string;
  brochureLabel?: string; // default "Brochure"
  onBrochureClick?: () => void;
};

const ProjectListItem: React.FC<{ data: ProjectListItemData }> = ({ data }) => {
  const navigate = useNavigate();

  const bhk =
    data.bhkOptions ?? (strings.projects.bhkOptions as unknown as BHKOption[]);
  const unitsLabel =
    data.unitsAvailableLabel ?? strings.projects.unitsAvailable;
  const startingFromLabel =
    data.startingFromLabel ?? strings.projects.startingFrom;

  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[420px] md:h-[795px] overflow-hidden">
        <img
          src={data.imageSrc}
          alt={data.title}
          className="h-full w-full object-cover"
        />

        {/* Desktop info strip (Figma 1030:188) */}
        <div className="hidden md:block absolute left-[40px] right-[40px] bottom-[37px]">
          <div
            className="w-full h-[112px] rounded-[1.54px] overflow-hidden border flex items-center"
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border.projectSoft,
            }}
          >
            <div className="flex items-center justify-between w-full px-[33.58px]">
              {/* Left title */}
              <div className="flex flex-col gap-[24px] items-start whitespace-nowrap">
                <p
                  className="text-[18px] font-medium leading-[1.6]"
                  style={{ fontFamily: fonts.body, color: colors.accent }}
                >
                  {data.title}
                </p>
                <p
                  className="text-[28px] font-normal leading-[1.3] tracking-[-0.84px] text-left"
                  style={{ fontFamily: fonts.heading, color: colors.secondary }}
                >
                  {data.subtitle}
                </p>
              </div>

              {/* Middle meta */}
              <div className="flex items-center gap-[36.962px]">
                <div className="flex flex-col gap-[18.481px] items-start w-[328.265px]">
                  <p
                    className="text-[16px] font-medium leading-[1.6] w-full"
                    style={{
                      fontFamily: fonts.body,
                      color: colors.destinationTag,
                    }}
                  >
                    {unitsLabel}
                  </p>
                  <div
                    className="flex items-end gap-[30.801px]"
                    style={{
                      fontFamily: fonts.body,
                      color: colors.text.tertiary,
                    }}
                  >
                    {bhk.slice(0, 3).map((b) => (
                      <div
                        key={b.val}
                        className="flex items-end gap-[4.62px] leading-[1.6]"
                      >
                        <span className="text-[36px] font-normal">{b.val}</span>
                        <span className="text-[14px] font-normal">
                          {b.label}
                        </span>
                      </div>
                    ))}
                    {bhk[3] ? (
                      <div className="flex items-end">
                        <div
                          className="text-[14px] leading-[1.08]"
                          style={{ fontFamily: fonts.body }}
                        >
                          <div>Studio</div>
                          <div>Apartment</div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div
                  className="h-[67.132px] w-px"
                  style={{ backgroundColor: colors.border.projectSoft }}
                />

                <div className="flex flex-col gap-[18.481px] items-start w-[138.178px]">
                  <p
                    className="text-[16px] font-medium leading-[1.6] w-full"
                    style={{
                      fontFamily: fonts.body,
                      color: colors.destinationTag,
                    }}
                  >
                    {startingFromLabel}
                  </p>
                  <div
                    className="flex items-end gap-[4.62px]"
                    style={{
                      fontFamily: fonts.body,
                      color: colors.text.tertiary,
                    }}
                  >
                    <span className="text-[36px] font-normal">
                      {data.priceNum}
                    </span>
                    <span className="text-[14px] font-normal">
                      {data.priceText}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right CTAs */}
              <div className="flex items-center gap-[12px]">
                <button
                  type="button"
                  onClick={data.onBrochureClick}
                  className="h-[62px] border flex items-center justify-center gap-[6px] px-[26px] py-[22px] cursor-pointer"
                  style={{
                    backgroundColor: colors.surface,
                    borderColor: "#1F69C9",
                    fontFamily: fonts.body,
                  }}
                >
                  <span className="text-[18px] leading-[1.19] text-black font-normal">
                    {data.brochureLabel ?? "Brochure"}
                  </span>
                  <span className="text-black text-[20px] leading-none">↓</span>
                </button>
                <button
                  type="button"
                  aria-label="Open project"
                  onClick={() => navigate(`/projects/${data.id}`)}
                  className="size-[62px] flex items-center justify-center cursor-pointer"
                  style={{ backgroundColor: colors.accent }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke={colors.text.onAccent}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile info strip (reuse existing project-preview mobile pattern) */}
      <div className="md:hidden w-full">
        <div
          className="w-full overflow-hidden border"
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.border.projectSoft,
          }}
        >
          <div className="px-[19px] pt-[19px] pb-[16px]">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col items-start gap-[14px]">
                <p
                  className="text-[12px] font-medium leading-[1.6]"
                  style={{ fontFamily: fonts.body, color: colors.accent }}
                >
                  {data.title}
                </p>
                <p
                  className="text-[18px] font-normal leading-[1.3] tracking-[-0.54px]"
                  style={{ fontFamily: fonts.heading, color: colors.secondary }}
                >
                  {data.subtitle}
                </p>
              </div>

              <button
                type="button"
                aria-label="Open project"
                onClick={() => navigate(`/projects/${data.id}`)}
                className="mt-[2px] shrink-0 size-[14px] flex items-center justify-center"
              >
                <span
                  style={{ color: colors.accent }}
                  className="text-[18px] leading-none"
                >
                  ›
                </span>
              </button>
            </div>

            <div className="mt-[18px] flex items-center gap-[16px]">
              <div className="flex flex-col items-start gap-[12px] w-[167px]">
                <p
                  className="text-[13px] font-medium leading-[1.6]"
                  style={{
                    fontFamily: fonts.body,
                    color: colors.destinationTag,
                  }}
                >
                  {unitsLabel}
                </p>
                <div
                  className="flex items-end gap-[14px]"
                  style={{
                    fontFamily: fonts.body,
                    color: colors.text.tertiary,
                  }}
                >
                  {bhk.slice(0, 3).map((b) => (
                    <div key={b.val} className="flex items-end gap-[4.62px]">
                      <span className="text-[28px] leading-none font-normal">
                        {b.val}
                      </span>
                      <span className="text-[12px] leading-none uppercase">
                        {b.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="w-px h-[46px]"
                style={{ backgroundColor: colors.border.projectSoft }}
              />

              <div className="flex flex-col items-start gap-[12px]">
                <p
                  className="text-[13px] font-medium leading-[1.6]"
                  style={{
                    fontFamily: fonts.body,
                    color: colors.destinationTag,
                  }}
                >
                  {startingFromLabel}
                </p>
                <div
                  className="flex items-end gap-[4.62px]"
                  style={{
                    fontFamily: fonts.body,
                    color: colors.text.tertiary,
                  }}
                >
                  <span className="text-[28px] leading-none font-normal">
                    {data.priceNum}
                  </span>
                  <span className="text-[12px] leading-none uppercase">
                    {data.priceText}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={data.onBrochureClick}
                className="w-full h-[63px] flex items-center justify-center gap-[10px] px-[26px] py-[22px]"
                style={{
                  backgroundColor: colors.surface,
                  border: `1px solid #1F69C9`,
                  fontFamily: fonts.body,
                }}
              >
                <span className="text-[18px] leading-[1.19] text-black font-normal">
                  {data.brochureLabel ?? "Brochure"}
                </span>
                <span className="text-black text-[20px] leading-none">↓</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectListItem;
