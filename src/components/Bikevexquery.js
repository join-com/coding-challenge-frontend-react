import Bikevexapi from './Bikevexapi';

const Bikevexquery = (props) => {
	let query = [];
	let { name } = props;
	if (!name) {
		throw new Error("Api path is required...!!!")
	}
	let qparams = Bikevexapi[name].qparams;
	for (const [key, value] of Object.entries(qparams)) {
		let newvalue = props.qparams[key] ? props.qparams[key] : value;
		if (!newvalue) {
			continue;
		}
		query.push(`${key}=${newvalue}`);
	}
	return `?${query.join("&")}`;
};

export default Bikevexquery;