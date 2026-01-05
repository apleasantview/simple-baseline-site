import baseline, { config as baselineConfig } from "@apleasantview/eleventy-plugin-baseline";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  // Defaults: verbose off, navigator off, sitemap on, multilingual off.
  eleventyConfig.addPlugin(baseline());
}

export const config = baselineConfig;
