
module.exports = (on, config) => {
  const { VueLoaderPlugin } = require("vue-loader");
  if (config.testingType === 'component') {
    const { startDevServer } = require('@cypress/webpack-dev-server')

    // Your project's Webpack configuration
    const webpackConfig = {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
          {
            test: /\.vue$/,
            loader: "vue-loader",
          },
          // {
          //   test: /\.postcss/,
          //   loader: 'postcss-loader',
          //   options: {
          //     ident: 'postcss',
          //     plugins: [
          //     require('tailwindcss')('./tailwind.config.js'),
          //     require('autoprefixer'),
          //     ],
          //   },
          // },
          // {
          //   test: /\.css/,
          //   loader: 'postcss-loader',
          //   options: {
          //     ident: 'postcss',
          //     plugins: [
          //     require('tailwindcss')('./tailwind.config.js'),
          //     require('autoprefixer'),
          //     ],
          //   },
          // }
        ],
      },
      plugins: [
        new VueLoaderPlugin(),
      ],
    }

    on('dev-server:start', (options) =>
      startDevServer({ options, webpackConfig })
    )
  }
}