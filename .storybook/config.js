import 'babel-polyfill';
import { configure } from '@storybook/react';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../app', true, /(story|stories).jsx?$/));
}

configure(loadStories, module);
