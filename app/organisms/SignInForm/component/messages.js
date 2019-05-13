/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  noAccount: {
    id: 'boilerplate.organisms.SignInForm.noAccount',
    defaultMessage: 'Don\'t have an account?',
  },
  signIn: {
    id: 'boilerplate.shared.Auth.signIn',
    defaultMessage: 'Sign in',
  },
  signUp: {
    id: 'boilerplate.shared.Auth.signUp',
    defaultMessage: 'Sign up',
  },
  email: {
    id: 'boilerplate.shared.Auth.email',
    defaultMessage: 'Email',
  },
  password: {
    id: 'boilerplate.shared.Auth.password',
    defaultMessage: 'Password',
  },
});
