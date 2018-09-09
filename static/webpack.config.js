const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['env'] }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
        ],
      },
      {
        test: require.resolve('jquery'),
        use:  [{
          loader:  'expose-loader',
          options: 'jQuery',
        }, {
          loader:  'expose-loader',
          options: '$',
        }],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      }
    ]
  },
  stats: {
    colors: true
  },
  resolve: {
    alias: {
      './owl.video.play.png': 'owl.carousel/src/img/owl.video.play.png',
    }
  },
  devtool: 'source-map',
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'main.html'),
      template: path.join(__dirname, './src/templates', 'main.html'),
      inject: true,
    }),
    new CopyWebpackPlugin([
      {
        from: './src/assets',
        to: path.resolve(__dirname, 'dist/assets')
      },
      {
        from:    'fonts',
        to:      path.resolve(__dirname, 'dist/assets/fonts'),
        context: './node_modules/font-awesome',
      }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": 'jquery',
      Vue: ['vue/dist/vue.esm.js', 'default']
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};
