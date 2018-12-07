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

const Form = styled.div`
  font-size: 1.5rem;
  line-height: 1.4;
  
  input,textarea {
    width: 100%;
    padding: 7px 10px 7px 10px;
    font-size: 1.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    display: block;
    &:focus {
      outline: 0;
    }
  }
  select {
    width: 100%;
    position: relative;
    font-size: 1.5rem;
    padding: 7px 10px 7px 10px;
    border: 0 none;
    z-index: 1;
    box-shadow: none;
    background-image: none;
    appearance: none;
    border: solid 1px #e0e0e0;
    border-radius: 2px;
    background-color: white;
    &:focus {
      outline: 0;
    }
  }
  select::after {
      content: ' ';
      position: absolute;
      z-index: 0;
      right: 12px;
      top: 50%;
      width: 13px;
      height: 8px;
      margin-top: -4px;
      background: url("data:image/svg+xml;charset=utf8,%3Csvg width='13' height='8' viewBox='0 0 13 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.822 7.17a.996.996 0 0 0 1.298-.097l4.953-4.953A.999.999 0 0 0 12.07.707.996.996 0 0 0 10.66.705L6.382 4.982 2.1.699A.99.99 0 0 0 .7.7.987.987 0 0 0 .7 2.1l4.906 4.906c.066.066.14.121.217.164z' fill='%239E9E9E' fill-rule='evenodd'/%3E%3C/svg%3E");
    } 

  .btn,
  button,
  input[type='submit'] {
    width: auto;
    font-size: 1.5rem;
    padding: 6px 24px;
    line-height: 1.4;
    border-radius: 2px;
    background: #287dc0;
    border: 1px solid #287dc0;
    color: white;
    transition: all 0.1s;
      &[disabled] {
          opacity: 0.3;
      }
    &:hover {
        cursor: pointer;
        background-color: #186098;
        color: white;
    } 
    &:focus {
      outline: 0;
    }
  }
  input[type='checkbox'] {
    width: auto;
    margin: 5px 7px 5px 0px;
    & + label {
      display: inline-block;
    }
  }

  input.error, textarea.error {
    border: 1px solid #ea222f;
    background: #fef6f7;
    border-radius: 2px;
  }

  .input-feedback {
    color: #ea222f;
    font-size: 13px;
    padding-left: 2px;
  }

  button:disabled {
    opacity: .5;
    cursor: not-allowed !important;
  }

  button + button {
    margin-left: 1rem;
  }

  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
    max-width: 350px;
    margin-bottom: 15px;
    position: relative;

    &[disabled] {
      opacity: 0.5;
    }

    &[aria-busy='true']::before {
      //background-size: 50% auto;
      //animation: ${loading} 0.5s linear infinite;
    }
  }
  fieldset + fieldset {
    margin-top: 10px;
  }

  *::placeholder {
    color: #bdbdbd;
    opacity: 1;
  }

.file-upload {
  position: relative;
  margin-top: 4px;
}

.file-upload-label {
  display: block;
  padding: 1em 2em;
  color: #212729;
  border-radius: 2px;
  transition: background .3s;
  border: 1px dashed;
  cursor: pointer;

}
    
.file-upload-input {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width:0;
    height: 100%;
    opacity: 0;
}
`;

Form.displayName = 'Form';

export default Form;
