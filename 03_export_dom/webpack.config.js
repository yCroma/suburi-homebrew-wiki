const MODE = "development"

module.exports = {
	mode: MODE,
	entry: "./src/js/index.js",
	output: {
		path: `${__dirname}/dist`,
		filename: "index.js"
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},
	devServer: {
		contentBase: "dist",
		open: true
	}
}
