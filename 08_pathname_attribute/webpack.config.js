const HtmlWebpackPlugin = require('html-webpack-plugin')

const MODE = "development"

module.exports = {
	resolve: {
		fallback: {
			"fs": false,
			"tls": false,
			"net": false,
			"path": false,
			"zlib": false,
			"http": false,
			"https": false,
			"stream": false,
			"crypto": false,
			"crypto-browserify": false,
			"util": false,
			"buffer": false,
			"vm": false,
			"os": false,
			"constants": false,
			"assert": false
		}
	},
	target: 'web',
	mode: MODE,
	entry: "./src/index.js",
	output: {
		path: `${__dirname}/dist`,
		filename: "index.js"
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "html-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `${__dirname}/src/index.html`,
			filename: "index.html"
		})
	],
	devServer: {
		contentBase: "./dist",
		open: true
	}
}
