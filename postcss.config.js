import postcssImport from "postcss-import";
import postcssMixins from "postcss-mixins";
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";

const isProd = process.env.ELEVENTY_ENV === "production";

const plugins = [
  postcssImport(),
  postcssMixins(),
  postcssPresetEnv({ stage: 1 }),
];

if (isProd) {
  plugins.push(cssnano({ preset: "default" }));
}

/** @type {import('postcss-load-config').Config} */
export default {
  map: isProd ? false : { inline: true },
  plugins
};
