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
				use: "html-loader"
			}
		]
	},
	devServer: {
		contentBase: "dist",
		open: true
	}
}
