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

	config.module.rules = config.module.rules.filter(
		rule => rule.test.toString() !== '/\\.css$/'
	);

	config.module.rules.push({
		test: /\.css$/,
		use: [
			{
				loader: 'style-loader',
			},
			{
				loader: 'css-loader',
				options: {
					sourceMap: true,
					// modules: true,
					// localIdentName: '[name]-[local]_[hash:base64:5]',
					// importLoaders: 1,
				},
			},
		],
	});

	config.resolve.modules = [
		...(config.resolve.modules || []),
		path.resolve(__dirname, "../"),
		path.resolve(__dirname, "../src"),
	];

	return config;
};
