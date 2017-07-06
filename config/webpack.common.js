var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
      'polyfills': './src/polyfills.ts',
      'vendor': './src/vendor.ts',
      'fa': 'font-awesome-sass-loader!./config/font-awesome.config.js',
      'app': './src/main.ts',
      'twbs':'bootstrap-loader'
  },

  link:[
      { rel: 'stylesheet', href: '/assets/font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/assets/froala-editor/css/froala_editor.pkgd.min.css' }
  ],

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [{
          loader: 'awesome-typescript-loader',
          options: { configFileName: helpers.root('tsconfig.json') }
        } , 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        use: ['to-string-loader','style-loader','css-loader']
      },

      {
        test: /\.scss$/,
        use: ['raw-loader', 'sass-loader']
      },

      /*
       * Bootstrap 4 loader
       */
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: 'imports-loader?jQuery=jquery'
      },

      /*
       * Font loaders, required for font-awesome-sass-loader and bootstrap-loader
       */
      {
        test: /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },

  plugins: [
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
          Tether: "tether",
          "window.Tether": "tether",
          Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
          Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
          Button: "exports-loader?Button!bootstrap/js/dist/button",
          Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
          Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
          Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
          Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
          Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
          Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
          Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
          Util: "exports-loader?Util!bootstrap/js/dist/util"
      }),
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new CopyWebpackPlugin([
      {
          from: 'node_modules/froala-editor/css/',
          to: 'assets/froala-editor/css/',
      },
      {
          from: 'node_modules/font-awesome/css/font-awesome.min.css',
          to: 'assets/font-awesome/css/font-awesome.min.css',
      },
      {
          from: 'node_modules/font-awesome/fonts',
          to: 'assets/font-awesome/fonts'
      }
    ]),
    new ExtractTextPlugin('src/assets/froala-editor/css/froala_editor.pkgd.min.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/logo.ico'
    })
  ]
};
