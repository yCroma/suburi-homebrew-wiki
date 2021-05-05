const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: "development",
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
