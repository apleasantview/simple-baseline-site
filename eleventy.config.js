import baseline, { config as baselineConfig } from "@apleasantview/eleventy-plugin-baseline";
import i18n from "./src/_data/i18n.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  // Multilingual on; default language and languages pulled from i18n data.
  eleventyConfig.addPlugin(baseline({
    multilingual: true,
    defaultLanguage: i18n.defaultLanguage,
    languages: i18n.languages
  }));
}

export const config = baselineConfig;
