const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'client', 'app.jsx'),
  module: {
    rules : [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use : {
          loader: 'babel-loader'
        }
      },
    ]
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: './client/index.html'
    })
  ]
};