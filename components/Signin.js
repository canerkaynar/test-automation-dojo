import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Error from './ErrorMessage';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from './User';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormStyle from '../components/styles/Form.js';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class Signin extends Component {

  static proptypes = {
    title: PropTypes.bool
  }

  static defaultProps = {
    title: true
  }

  state = {
    password: '',
    email: ''
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { title } = this.props;
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => (
          <>
          <FormStyle>
                    <Formik
                        initialValues={{ email: '', password: '' }}
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
                            password: Yup.string().required('Enter your password')
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
                                  <label htmlFor="password">Password</label>
                                  <input
                                    type="password"
                                    name="password"
                                    id="password"
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
                                  <button className="btn" type="submit" disabled={isSubmitting}>Sign In!</button>
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

export default Signin;