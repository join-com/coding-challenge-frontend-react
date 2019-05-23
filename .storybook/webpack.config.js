const path = require("path");
const SRC_PATH = path.join(__dirname, '../src');

module.exports = ({config}) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		include: [SRC_PATH],
		use: [
			{
				loader: require.resolve('awesome-typescript-loader'),
				options: {
					configFileName: './.storybook/tsconfig.json'
				}
			},
			{
				loader: require.resolve('react-docgen-typescript-loader')
			}
		]
	});

	config.module.rules.push({
		test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
		include: [SRC_PATH],
		use: [
			{
				loader: require.resolve('url-loader'),
				options: {
				  limit: 10000,
				  name: 'static/media/[name].[hash:8].[ext]',
				}
			}
		]
	});

	config.resolve.extensions.push('.ts', '.tsx', '.png');

	config.resolve.modules = [
		...(config.resolve.modules || []),
		path.resolve(__dirname, "../"),
		path.resolve(__dirname, "../src"),
	];

	return config;
};
