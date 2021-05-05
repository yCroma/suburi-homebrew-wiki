const HtmlWebpackPlugin = require('html-webpack-plugin')

const MODE = "development"

module.exports = {
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
