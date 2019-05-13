const webpack = require('webpack');

module.exports = {
  entry: {
    all: __dirname + '/source/javascripts/index.js',
  },
  resolve: {
    root: __dirname + '/source/javascripts'
  },
  output: {
    path: __dirname + '/.tmp/webpack_output',
    filename: 'javascripts/[name].js'
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    loaders: [
      {
        test: /\.(sass|scss)$/,
        loaders: ['style', 'css', 'sass', 'import-glob']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['es2015'] }
      },
      ,
      {
        test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
            name: 'fonts/[name].[ext]',
            limit: 50,
        },
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }
  })
  ]
};
