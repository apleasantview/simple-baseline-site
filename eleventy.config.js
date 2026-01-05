import baseline, { config as baselineConfig } from "@apleasantview/eleventy-plugin-baseline";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(baseline({
    enableNavigatorTemplate: true, // local dev only; disable for production
  }));
}

export const config = baselineConfig;
