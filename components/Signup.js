import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormStyle from '../components/styles/Form.js';

import { CURRENT_USER_QUERY } from './User';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class Signup extends Component {

  static proptypes = {
    title: PropTypes.bool
  }

  static defaultProps = {
    title: true
  }

  state = {
    name: '',
    password: '',
    email: ''
  };
  saveToState(e) {
    this.setState({ [e.target.name]: e.target.value });
  };
  resetState() {
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { title } = this.props;
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => (
          <>
          <FormStyle>
                    <Formik
                        initialValues={{ email: '', password: '', name:'' }}
                        onSubmit={async (values, { setSubmitting }) => {
                          await signup()
                          .then(() => {
                            setSubmitting(true)
                            Router.push({
                              pathname: '/'
                            });
                          },() => {
                            setSubmitting(false)
                          });
                        }}
          
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                            .email('Email must be a valid email')
                            .required('Enter your email'),
                            name: Yup.string().required('Enter your name'),
                            password: Yup.string().required('Enter your password').min(6,'Password must be at least 6 characters.')
                    })}>
                    {props => {
                        const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset,
                        } = props;
                        return (
                        <form onSubmit={handleSubmit}
                              method="post">
                              <fieldset disabled={loading} aria-busy={loading}>
                                {title && <h2>Sign Up for An Account</h2>}
                                <Error error={error} />
                                <div className="spacing-base">
                                  <label htmlFor="email">Email</label>
                                  <input
                                      type="email"
                                      name="email"
                                      id="email"
                                      value={values.email}
                                      onChange={(e) => {handleChange(e); this.saveToState(e)}}
                                      onBlur={handleBlur}
                                      className={
                                              errors.email && touched.email ? 'text-input error' : 'text-input'
                                          }
                                    />
                                    {   
                                      errors.email &&
                                      touched.email && <div className="spacing-top-mini input-feedback">{errors.email}</div>
                                    }
                                </div>

                                <div className="spacing-base">
                                  <label htmlFor="name">Name</label>
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={values.name}
                                    onChange={(e) => {handleChange(e); this.saveToState(e)}}
                                    onBlur={handleBlur}
                                    className={
                                        errors.name && touched.name ? 'text-input error' : 'text-input'
                                    }
                                  />
                                  {   
                                      errors.name &&
                                      touched.name && <div className="spacing-top-mini input-feedback">{errors.name}</div>
                                  }
                                </div>

                                <div className="spacing-base">
                                  <label htmlFor="password">Password</label>
                                  <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="At least 6 characters"
                                    value={values.password}
                                    onChange={(e) => {handleChange(e); this.saveToState(e)}}
                                    onBlur={handleBlur}
                                    className={
                                        errors.password && touched.password ? 'text-input error' : 'text-input'
                                    }
                                  />
                                  {   
                                      errors.password &&
                                      touched.password && <div className="spacing-top-mini input-feedback">{errors.password}</div>
                                  }
                                </div>
                                <div className="spacing-top-big">
                                  <button type="button"
                                      className="btn outline"
                                      onClick={(e) => {handleReset(e); this.resetState()}}
                                      disabled={!dirty || isSubmitting}>Reset
                                  </button>
                                  <button className="btn" type="submit" disabled={isSubmitting}>Sign Up!</button>
                                </div>
                                
                              </fieldset>
                        </form>
                        );
                     }}
                    </Formik>
                </FormStyle>
                </>
        )}
      </Mutation>
    );
  }
}

export default Signup;