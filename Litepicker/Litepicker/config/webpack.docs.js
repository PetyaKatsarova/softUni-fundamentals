const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'style': path.join(__dirname, '../docs/scss/style.scss'),
    'js/demo.js': path.join(__dirname, '../docs/js/demo.ts'),
  },
  output: {
    path: path.join(__dirname, '../docs'),
    filename: '[name]',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /docs\/js\/demo\.ts?$/,
        loader: 'ts-loader',
      },
      {
        exclude: /node_modules/,
        test: /docs\/scss\/style\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    {
      apply(compiler) {
        compiler.hooks.shouldEmit.tap('Remove style from output', (compilation) => {
          delete compilation.assets['style'];  // Remove asset. Name of file depends of your entries and 
          return true;
        })
      }
    }
  ],
}
