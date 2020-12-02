const tailwindcss = require('tailwindcss')
const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')({
  preset: [
    'default',
    {
      discardComments: {
        removeAll: true,
      },
    },
  ],
})
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.svelte', './public/**/*.html'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    postcssPresetEnv,
    ...(process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []),
  ],
}
