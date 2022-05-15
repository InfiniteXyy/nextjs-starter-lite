// The tailwindcss and organize-import plugins are incompatible
// So we created a custom plugin to merge these two plugins
// https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/9#issuecomment-1021028722

const tailwindPlugin = require('prettier-plugin-tailwindcss');
const importsPlugin = require('prettier-plugin-organize-imports');

module.exports = {
  parsers: {
    typescript: {
      ...tailwindPlugin.parsers.typescript,
      preprocess: importsPlugin.parsers.typescript.preprocess,
    },
  },
};
