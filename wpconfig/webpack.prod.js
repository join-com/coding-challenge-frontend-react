const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

const prodconfig = {
	mode: "production",
	devServer: {
		contentBase: "./dist"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new Dotenv()
	]
}

module.exports = prodconfig