const HtmlWebpackPlugin = require('html-webpack-plugin')
const MODE = "development"
module.exports = {
	mode: MODE,
	target: "web",
	entry: "./src/index.js",
	output: {
		path: `${__dirname}/dist`,
		filename: `index.js`
	},
	resolve: {
		alias: {
			"Pages": `${__dirname}/src/pages`,
			"Components": `${__dirname}/src/web/components`,
			"Events": `${__dirname}/src/web/events`,
			"Utils": `${__dirname}/src/web/utils`
		}
	},
	module: {
		rules: [
			{
				test: /\.txt$/i,
				use: 'raw-loader'
			},
			{
				test: /\.html$/i,
				use: 'html-loader'
			}
		]
	},
	plugins:[
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
