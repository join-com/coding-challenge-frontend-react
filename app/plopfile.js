const promptDirectory = require('inquirer-directory');

const addReduxModuleGenerator = require('@apptension/react-scripts/plop/reduxModule');
const addReduxContainerGenerator = require('@apptension/react-scripts/plop/reduxContainer');
const addReactComponentGenerator = require('@apptension/react-scripts/plop/reactComponent');

module.exports = function(plop) {
  plop.setPrompt('directory', promptDirectory);

  addReduxModuleGenerator(plop);
  addReduxContainerGenerator(plop);
  addReactComponentGenerator(plop);
};
