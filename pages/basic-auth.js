import FormStyle from '../components/styles/Form.js';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Input = () => {

    return (
        <FormStyle onSubmit={(e) => e.preventDefault()}>
            <h2>Basic Auth</h2>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 500);
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                    .email()
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
                        <label htmlFor="email" style={{ display: 'block' }}>Email</label>
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
                            touched.email && <div className="input-feedback">{errors.email}</div>
                        }
                </fieldset>
                <fieldset>
                    <label htmlFor="password" style={{ display: 'block' }}>Password</label>
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
                        touched.password && <div className="input-feedback">{errors.password}</div>
                    }
                </fieldset>
                    <button type="button"
                            className="outline"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}>Reset
                    </button>
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </form>
                );
            }}
    </Formik>
        </FormStyle>
    )
};

export default Input;