const Dotenv = require("dotenv-webpack");

const prodconfig = {
	mode: "production",
	devServer: {
		contentBase: "./dist"
	},
	plugins: [
		new Dotenv({
			path: "./.env.production"
		})
	]
}

module.exports = prodconfig