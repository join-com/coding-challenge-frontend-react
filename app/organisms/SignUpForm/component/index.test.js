import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import faker from 'faker';

import { Link } from 'react-router-dom';

import { TextField } from 'redux-form-material-ui';
import { Field } from 'redux-form/immutable';
import { Button, Grid } from '@material-ui/core';

import SignUpForm from './';

import Error from '../../../atoms/Error';
import { checkTranslation, getIntl } from '../../../utils/test';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignUpForm />', () => {
  const error = 'ERROR';
  const spies = {};
  let form;

  beforeEach(() => {
    spies.handleSubmit = jest.fn((callback) => (data) => callback(data));
    spies.onSubmit = jest.fn();
    form = shallow(
      <SignUpForm handleSubmit={spies.handleSubmit} onSubmit={spies.onSubmit} intl={getIntl()} error={error} />
    );
  });

  it('sets the form submit handler', () => {
    const data = { name: faker.internet.userName(), email: faker.internet.email() };
    form.prop('onSubmit')(data);
    expect(spies.onSubmit).toBeCalledWith(data);
  });

  describe('header', () => {
    let header;

    beforeEach(() => {
      header = form.childAt(0);
    });

    it('renders the form header', () => {
      expect(header.type()).toBe('h2');
      checkTranslation(header.childAt(0), 'boilerplate.shared.Auth.signUp', 'Sign up');
    });
  });

  describe('error', () => {
    let generalError;

    beforeEach(() => {
      generalError = form.childAt(1);
    });

    it('renders an error message not related to any field', () => {
      expect(generalError.type()).toEqual(Error);
      expect(generalError.childAt(0).text()).toEqual(error);
    });
  });

  describe('form elements', () => {
    let container;
    let fieldWrapper;
    let field;

    const checkWrapper = (wrapper) => {
      expect(wrapper.type()).toEqual(Grid);
      expect(wrapper.prop('xs')).toBe(12);
      expect(Object.keys(wrapper.props()).includes('item')).toBe(true);
    };

    beforeEach(() => {
      container = form.childAt(2);
    });

    describe('fields', () => {
      describe('name', () => {
        beforeEach(() => {
          fieldWrapper = container.childAt(0);
          field = fieldWrapper.childAt(0);
        });

        it('renders the field', () => {
          expect(field.prop('label')).toBe('Name');
          expect(field.prop('name')).toBe('name');
          expect(field.prop('type')).toBe('text');
        });
      });

      describe('email', () => {
        beforeEach(() => {
          fieldWrapper = container.childAt(1);
          field = fieldWrapper.childAt(0);
        });

        it('renders the field', () => {
          expect(field.prop('label')).toBe('Email');
          expect(field.prop('name')).toBe('email');
          expect(field.prop('type')).toBe('email');
        });
      });

      describe('password', () => {
        beforeEach(() => {
          fieldWrapper = container.childAt(2);
          field = fieldWrapper.childAt(0);
        });

        it('renders the field', () => {
          expect(field.prop('label')).toBe('Password');
          expect(field.prop('name')).toBe('password');
          expect(field.prop('type')).toBe('password');
        });
      });

      afterEach(() => {
        expect(field.type()).toEqual(Field);
        expect(field.prop('component')).toEqual(TextField);
        checkWrapper(fieldWrapper);
      });
    });

    describe('button', () => {
      beforeEach(() => {
        fieldWrapper = container.childAt(3);
        field = fieldWrapper.childAt(0);
      });

      it('renders the field', () => {
        expect(field.type()).toEqual(Button);
        checkTranslation(field.childAt(0), 'boilerplate.shared.Auth.signUp', 'Sign up');
        expect(field.prop('type')).toBe('submit');
        expect(field.prop('variant')).toBe('contained');
      });

      afterEach(() => checkWrapper(fieldWrapper));
    });

    describe('link', () => {
      beforeEach(() => {
        fieldWrapper = container.childAt(4);
        field = fieldWrapper.find(Link).first();
      });

      it('renders the link', () => {
        expect(field.prop('to')).toBe('/signin');
        checkTranslation(field.childAt(0), 'boilerplate.shared.Auth.signIn', 'Sign in');
      });

      it('renders the link hint text', () => {
        checkTranslation(fieldWrapper.childAt(0), 'boilerplate.organisms.SignUpForm.alreadyHaveAccount',
          'Already have an account?');
      });
    });
  });
});
