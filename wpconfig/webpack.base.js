let path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


const baseConfig = {
	entry: "./src/index.js",
	output: {
		path: path.resolve("dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: "babel-loader"
			}
		]
	},
	resolve: {
		extensions: ["*", ".js"]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html"
		})
	]
}

module.exports = baseConfig;