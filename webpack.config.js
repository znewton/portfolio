const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.min.js'
	},
	module : {
		loaders : [
			{
				test : /\.jsx?/,
				include : APP_DIR,
				loader : 'babel-loader'
			},
			{
				test : /\.scss?/,
				include : APP_DIR,
				use : ExtractTextPlugin.extract([
					{loader : "css-loader"},
					{loader : "sass-loader"}
				])
			},
      {
        test: /\.html$/,
        include: PUBLIC_DIR,
        loader: 'html-loader'
      }
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.min.css'),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    })
	]
};

module.exports = config;
