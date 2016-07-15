var webpack  = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const node_dir = __dirname + '/node_modules';
const path = require('path');


module.exports = {
  entry: {
    app:    './public/app/app',
    login:  './public/app/login'
  },
  
  output: {
    path: __dirname + '/public/build/',
    publicPath: '/build/',
    library: '[name]',
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test:     /\.js/,
        exclude:  [/\/node_modules\//, /\/semantic\//],
        loader:   'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ],

    // noParse: [/\/node_modules\//, /\/semantic\//],
  },
  
  plugins: [
    // this plugin for compile only workable modules
    new webpack.NoErrorsPlugin(),
    
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: ['app', 'login']
    })
  ],

  resolve: {
    root: [
      path.resolve('node_modules')
    ]
  },

  watch: NODE_ENV == 'development',

  // on developmental state, when "watch" is a true,
  // 100ms after every saveing file, webpack run rebuild

  watchOptions: {
    aggregateTimeout: 100
  },
  
  // js source maps will send on client side only on development state

  devtool: NODE_ENV == 'development' ? 'source-map': null
};

// our code will minified only on production

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    // this plugin for code optimization and for minifying
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings:     false,
        drop_console: true,
        unsafe:       true
      }
    })
  )
};
