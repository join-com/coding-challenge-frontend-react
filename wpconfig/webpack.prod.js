const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const path = require("path");

const prodconfig = {
	mode: "production",
	devServer: {
		contentBase: path.join(__dirname, './dist')
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = prodconfig