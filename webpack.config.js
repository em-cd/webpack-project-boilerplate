var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin'); // when creating a custom index.html for the project, this line is unnecessary
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  
  entry: {
    app: PATHS.app
  },

  output: {
    path: PATHS.build,
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'] // allow imports without an extension and with extensions .js and .jsx
  },

  devServer: {
    hot: true,
    inline: true,
    stats: 'errors-only' // reduces amount of output at command line to only show errors
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css', 'sass'),
        include: PATHS.app
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack boilerplate'
    }),
    new webpack.HotModuleReplacementPlugin({
        multiStep: true
      }),
    new ExtractTextPlugin('[name].css')
  ]
};