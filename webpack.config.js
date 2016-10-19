var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './assets/js/global.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'global.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  devServer: {
    inline: true,
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
            'style',
            'css!sass'
        )
      },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]
  }
};
