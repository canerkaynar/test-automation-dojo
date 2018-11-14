import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  background: white;
  padding: 2rem;
  border-radius: 6px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;

  h2 {
    text-decoration: underline;
  }
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    border: solid 1px #e0e0e0
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.red};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  input[type='checkbox'] {
    width: auto;

    & + label {
      display: inline-block;
    }
  }

  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
    max-width: 400px;

    &[disabled] {
      opacity: 0.5;
    }
    /*&::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%);
    }*/

    &[aria-busy='true']::before {
      //background-size: 50% auto;
      //animation: ${loading} 0.5s linear infinite;
    }
  }
  fieldset + fieldset {
    margin-top: 10px;
  }
`;

Form.displayName = 'Form';

export default Form;
