import baseline, { config as baselineConfig } from "@apleasantview/eleventy-plugin-baseline";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  // Defaults enable assets-core, assets-postcss, assets-esbuild.
  eleventyConfig.addPlugin(baseline());
}

export const config = baselineConfig;
