var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        enforce: 'pre',
        include: path.resolve(__dirname, 'src/styles/'),
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
        }]
      },
      {
        test: /\.js$/,
        loaders: ['eslint-loader'],
        enforce: 'pre',
        include: [
          path.resolve(__dirname, 'src'),
        ],
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loaders: ['react-hot-loader', 'babel-loader?plugins[]=transform-runtime']
      },
      {
        test:   /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  }
}