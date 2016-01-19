/**
* Dependencies
*/
var webpack = require('webpack');
var path = require('path');

/**
* Environment
*/
var isProduction = process.env.NODE_ENV === 'production';
var port = process.env.PORT || 3000;

/**
* Plugins
*/
var plugins = [
  new webpack.optimize.CommonsChunkPlugin('common.js'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.API_URL': JSON.stringify(process.env.API_URL)
  }),
  new webpack.IgnorePlugin(new RegExp('node-sass'))
];

if (!isProduction) {
  plugins.push(new webpack.HotModuleReplacementPlugin()),
  plugins.push(new webpack.NoErrorsPlugin())
}

if (isProduction) {
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

/**
* Entry points
*/
var entry = [
  './src/index.jsx'
];

if (!isProduction) {
  entry.unshift('webpack/hot/only-dev-server');
  entry.unshift('webpack-dev-server/client?http://localhost:' + port);
}

/**
* Config
*/
module.exports = {
  devtool: !isProduction ? 'source-map' : null,

  entry: entry,

  output: {
    path: path.join(__dirname, '/public/'),
    publicPath: '/',
    filename: 'app.js'
  },

  plugins: plugins,

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: !isProduction ? ['react-hot', 'babel'] : ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: !isProduction ? 'style-loader!css-loader!autoprefixer!sass' : 
      'css-loader!autoprefixer!sass'
    }]
  }
};