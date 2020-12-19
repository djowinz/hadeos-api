const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const { NODE_ENV = 'production' } = process.env;

const primaryObj = {
  entry: [
    './src/main.ts'
  ],
  mode: NODE_ENV,
  target: 'node',
  watch: true,
  watchOptions: {
    poll: 2000,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackShellPlugin({
      onBuildEnd: {
        scripts: ['yarn run:dev'],
        blocking: false,
        parallel: true,
      }
    }),
  ],
  externals: [nodeExternals()],
}

if (NODE_ENV !== 'production') {
  primaryObj.devtool = 'source-map';
}

module.exports = primaryObj;