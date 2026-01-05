import baseline, { config as baselineConfig } from "@apleasantview/eleventy-plugin-baseline";

import path from "node:path";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(baseline());
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    urlPath: "/media/",
    outputDir: "./dist/media/",
    formats: ["avif", "webp", "jpeg"],
    widths: [320, 640, 960, 1280],
    filenameFormat(id, src, width, format) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${width}w.${format}`;
    },
  });
}

export const config = baselineConfig;
