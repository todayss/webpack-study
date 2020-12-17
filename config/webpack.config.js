const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devtool: 'inline-source-map'
}