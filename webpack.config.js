const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        'eslint-loader',
      ] },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|gif|png|jpe?g)$/,
        loader: 'url-loader',
        options: {
          limit: 100,
          fallback: 'file-loader',
          publicPath: './img',
          outputPath: './img',
        },
      },
    ]
  },
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Fellyph Cintra Front-end Engineer',
      template: './src/index.html',
      favicon: false,
    }),
  ],
};
