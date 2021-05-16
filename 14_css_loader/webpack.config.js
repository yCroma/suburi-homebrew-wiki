const HtmlWebpackPlugin = require('html-webpack-plugin')
const MODE = "production"
module.exports = {
	mode: MODE,
	target: "web",
	entry: "./src/index.js",
	output: {
		path: `${__dirname}/dist`,
		filename: `index.js`
	},
	module: {
		rules: [
			{
				test: /\.css/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: { 
							url: false,
							sourceMap: true
						}
					}
				]
			}
		]
	},
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
