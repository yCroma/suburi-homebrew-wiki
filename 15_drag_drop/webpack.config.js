const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			template: `${__dirname}/src/index.html`,
			filename: `index.html`
		})
	],
	devServer: {
		contentBase: "./dist",
		open: true
	}
}
