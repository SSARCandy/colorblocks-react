const webpack = require('webpack');

const PROD = (process.env.NODE_ENV === 'production') ? true : false;

let plugins = [
];

const prod_plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: false,
    mangle: false,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
];

plugins = plugins.concat(PROD ? prod_plugins : []);

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: plugins
};
