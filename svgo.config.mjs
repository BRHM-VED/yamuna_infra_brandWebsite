/** @type {import('svgo').Config} */
export default {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // Keep IDs stable if you ever reference fragments externally
          cleanupIds: { minify: true, preserve: [], force: false },
        },
      },
    },
  ],
};
