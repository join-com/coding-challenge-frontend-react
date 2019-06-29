const webpack = require("webpack");

const devconfig = {
	devtool: "eval-source-map",
	devServer: {
		contentBase: "./dist",
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = devconfig;