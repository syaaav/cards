const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: process.env.MODE,

  entry: './src/screen_Start.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modeles/,
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' },
      { test: /\.js$/, use: 'babel-loader' },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  devtool:
    process.env.MODE === 'production' ? 'hidden-source-map' : 'source-map',

  plugins: [
    new MiniCssExtractPlugin(),

    new CopyPlugin({
      patterns: [{ from: 'static', to: 'static' }],
    }),

    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],

  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
};
