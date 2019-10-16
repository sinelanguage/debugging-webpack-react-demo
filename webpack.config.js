const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const pathsToClean = ['dist'];

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // __dirname is global node convenience variable which returns the current path
    // path.resolve takes first arg and concats it to second arg to make a full
    // pathname: 'currentDir/dist'
    path: path.resolve(__dirname, 'dist'),
  },
  // devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      fileName: 'index.html',
      inject: 'body',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(pathsToClean),
  ],
  module: {
    rules: [
      {
        // Out of the box, webpack only understands JavaScript and JSON files.
        // Loaders allow webpack to process other types of files and convert them into
        // valid modules that can be consumed by your application and added to the dependency graph.
        //
        // which fileType to use the loader
        test: /\.css$/,
        // recommended by webpack to use style-loader (add css to dom) and css-loader
        // (interprets @import and url()) together
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  mode: 'production',
  optimization: {
    namedModules: true,
    minimize: true,
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },
};
