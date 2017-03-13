const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		path.resolve(__dirname, 'examples', 'index.js'),
	],

	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},

	module: {
		rules: [{
			test: /\.js$/,
			include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'examples')],
			loader: 'babel-loader',
			query: {
				cacheDirectory: true,
			},
		}],
	},
	resolve: {
		modules: ['src', 'examples', 'node_modules'],
		extensions: ['.js'],
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	],

	devtool: 'cheap-eval-source-map',

	devServer: {
		contentBase: [path.resolve(__dirname, 'examples')],
		hot: true,
		publicPath: '/',
		port: 3000,
	},
};