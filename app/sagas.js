const context = require.context('./store', true, /saga\.js$/);
const sagas = [];
context.keys().forEach((fileRelativePath) => sagas.push(context(fileRelativePath).default));

export default sagas;
