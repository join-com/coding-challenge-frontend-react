const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const baseConfig = {
	entry: {
		app: "./src/App",
		incidents: "./src/Incidents",
		details: "./src/Details"
	},
	output: {
		path: path.resolve("dist"),
		filename: "[name].bundle.js",
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: "babel-loader"
			}, {
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	resolve: {
		alias: {
			"assets": path.resolve('src/assets/'),
			"styles": path.resolve('src/assets/styles/')
		},
		extensions: ["*", ".js"]
	},
	devServer: {
		historyApiFallback: true,
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