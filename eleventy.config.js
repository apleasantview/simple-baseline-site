import baseline, { config as baselineConfig } from "@apleasantview/eleventy-plugin-baseline";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(baseline({
    assetsESBuild: {
      minify: process.env.ELEVENTY_ENV === "production",
      target: "es2017",
    },
  }));
}

export const config = baselineConfig;
