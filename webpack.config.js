const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src', 'index.js'),
	},

	output: {
		library: 'ReactFormProps',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
	},

	externals: [
		{
			react: {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react',
			},
		},
	],

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
		modules: ['src', 'node_modules'],
		extensions: ['.js'],
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		/*
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true, // React doesn't support IE8
				warnings: false,
			},
			mangle: {
				screw_ie8: true,
			},
			output: {
				comments: false,
				screw_ie8: true,
			},
			sourceMap: true,
		}),
		*/
	],

	devtool: 'source-map',
};