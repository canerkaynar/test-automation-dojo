import FormStyle from '../components/styles/Form.js';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Router from 'next/router';
import { isIdValue } from 'apollo-utilities';

export default class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginFailed: false
        }
    }
    render() {
        const {loginFailed} = this.state;

        return (
            <React.Fragment>
                <h2>Login</h2>
                <FormStyle>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            if (values.email === 'dojo@kloia.com' && values.password === '123456') {
                                setSubmitting(true);
                                Router.push({
                                    pathname: '/login-success'
                            })
                            } else {
                                setSubmitting(false);
                                this.setState({...this.state,loginFailed: true})                        
                            }
                            }, 500);
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                            .email('Email must be a valid email')
                            .required('Required'),
                            password: Yup.string().required('Required')
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
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <div className="spacing-base">
                                    <label htmlFor="email">Email</label>
                                    <input  id="email"
                                            placeholder="Enter your email"
                                            type="text"
                                            value={values.email}
                                            onChange={handleChange}
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
                                    <input  id="password"
                                            placeholder="Enter your password"
                                            type="text"
                                            value={values.password}
                                            onChange={handleChange}
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
                                        onClick={handleReset}
                                        disabled={!dirty || isSubmitting}>Reset
                                    </button>
                                    <button className="btn" type="submit" disabled={isSubmitting}>Submit</button>
                                    {   
                                        loginFailed && 
                                        <div className="input-feedback">Oops, that's not a match.</div>
                                    }
                                </div>
                        </fieldset>
                        </form>
                        );
                     }}
                    </Formik>
                </FormStyle>
            </React.Fragment>
        )
    }
}