const path = require('path')
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const dotEnv = require('dotenv-webpack')


let isDev = process.env.NODE_ENV === 'development';

const cssLoaders = extra => {
  const loaders = [
    MiniCssExtractPlugin.loader, 'css-loader', 
  ]

  if (extra) {
    loaders.push(extra)
  }

  return loaders
}

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:8].js',
  },
  devServer: {
    contentBase: [path.resolve(__dirname, 'dist')],
    port: 9000,
    watchContentBase: true,
    host: '192.168.1.87',
    disableHostCheck: true,
    historyApiFallback: true
    // publicPath: path.resolve(__dirname, 'dist'),
    // hotOnly: true,
    // hot: true,
  },
  target: 'web',
  devtool: isDev ? 'source-map' : '',
  plugins: [
    new HtmlPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
      minify: {
        collapseWhitespace: !isDev
      }
		}),
    new dotEnv(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    }),
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetWebpackPlugin(),
    ]
  },
  resolve: {
    alias: {
      '@com':    path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'public/assets'),
      '@shared': path.resolve(__dirname, 'src/shared-style'),
      "@redux":  path.resolve(__dirname, 'src/redux'),
      "@hooks":  path.resolve(__dirname, 'src/hooks'),
      '@utils':  path.resolve(__dirname, 'src/utils'),
      '@pages':  path.resolve(__dirname, 'src/pages')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:  cssLoaders()
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults" 
              }],
              '@babel/preset-react'
            ]
          }
        }]
      }
    ]
  },
  
}