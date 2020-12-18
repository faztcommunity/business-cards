const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env')(),
    !dev &&
      require('cssnano')({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      }),
  ],
}
