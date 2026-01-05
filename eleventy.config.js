import baseline, { config as baselineConfig } from "@apleasantview/eleventy-plugin-baseline";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  // Sitemap is enabled by default
  eleventyConfig.addPlugin(baseline());
}

export const config = baselineConfig;
