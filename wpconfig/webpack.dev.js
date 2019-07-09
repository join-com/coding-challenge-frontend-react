const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const path = require("path");

const devconfig = {
	devtool: "eval-source-map",
	devServer: {
		contentBase: "./dist",
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new Dotenv({
			path: path.resolve("./.env.developement")
		})
	]
}

module.exports = devconfig;