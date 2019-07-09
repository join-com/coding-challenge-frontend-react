const webpackmerge = require("webpack-merge");
const baseconfig = require("./webpack.base");

module.exports = ({ env }) => {
	const envconfig = require(`./webpack.${env}.js`);
	return webpackmerge(baseconfig, envconfig);
}