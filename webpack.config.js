const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    about: './src/about.js',
    analytics: './src/analytics.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './scripts/[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            }
          },
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            esModule: false,
            name: './images/[name].[ext]'
          },
        },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [1, 1],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 100
              }
            }
          },
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ //
      filename: './styles/[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/about.html',
      filename: 'about.html',
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/analytics.html',
      filename: 'analytics.html',
      chunks: ['analytics']
    }),
    new WebpackMd5Hash(),
  ]
};
