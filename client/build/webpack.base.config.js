const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')

const resolve = file => path.resolve(__dirname, '..', file)

module.exports = {
  resolve: {
    extensions: ['.mjs', '.js', '.vue'],
    alias: {
      '@': resolve('./src'),
      '#': resolve('./styles'),
      'img': resolve('./images')
    }
  },
  entry: [
    '@babel/polyfill',
    resolve('./src/index.js')
  ],
  output: {},
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLPlugin({
      filename: 'index.html',
      template: './build/index.template.html',
      inject: true
    })
  ]
}