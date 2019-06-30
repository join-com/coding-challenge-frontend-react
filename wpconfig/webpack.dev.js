const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

const devconfig = {
	devtool: "eval-source-map",
	devServer: {
		contentBase: "./dist",
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new Dotenv({
			path: "./.env.development"
		})
	]
}

module.exports = devconfig;