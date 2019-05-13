import { reducer as formReducer } from 'redux-form/immutable';

const context = require.context('./store', true, /reducer\.js$/);
const reducers = { form: formReducer };

context.keys().forEach((fileRelativePath) => {
  reducers[fileRelativePath.replace('./', '').replace('/reducer.js', '')] = context(fileRelativePath).default;
});

export default reducers;
