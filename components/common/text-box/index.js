import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Label from '../label/index.js';
import ErrorContainer from '../error-container/index.js';
import TextBox from '../../styles/TextBox.js';


export default class TextInput extends React.Component {
  static propTypes = {
    input: PropTypes.instanceOf(Object),
    meta: PropTypes.instanceOf(Object),
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    large: PropTypes.bool,
    className: PropTypes.string,
    errorStyle: PropTypes.string,
    errorClassName: PropTypes.string,
    verified: PropTypes.bool,
    isRequired: PropTypes.bool,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    onKeyDown: PropTypes.func,
    inputRef: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    maxLength: PropTypes.number,
    guide: PropTypes.bool,
    mask: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.instanceOf(Array)
    ])
  };

  static defaultProps = {
    type: 'text',
    meta: {
      touched: false, 
      error: false},
    isRequired: false,
    inputRef: () => {
    }
  }

  exportInputRef(ref) {
    this.inputRef = ref;
    this.props.inputRef(ref);
  }

  keyDown(e) {
    const {onKeyDown} = this.props;
    if (typeof onKeyDown === 'function') {
      onKeyDown(e);
    }
  }

  renderInputField(inputId) {
    const {type, placeholder, min, max, disabled, input, maxLength, mask, guide} = this.props;

    let content;

    content = <input ref={this.exportInputRef} {...input} id={inputId}
        placeholder={placeholder} type={type} onKeyDown={this.keyDown} disabled={disabled} min={min}
        max={max} maxLength={maxLength}/>

    return content;
  }

  render() {
    const {
      meta: {touched, error}, label, className, errorStyle, isRequired,
      large, verified, errorClassName, id
    } = this.props;
    const inputId = id ? `${id}-input` : '';
    const textBoxStyle = cx(Styles.textBox, {
      [className]: !!className,
      [errorStyle]: !!errorStyle && touched && error,
      [Styles.isError]: touched && error,
      [Styles.isLarge]: !!large,
      [Styles.isVerified]: verified !== undefined && verified,
      [Styles.isNotVerified]: verified !== undefined && !verified
    });

    return (
      <TextBox id={id}>
        {
          label && <Label htmlFor={inputId} text={label} isRequired={isRequired}/>
        }
        {
          this.renderInputField(inputId)
        }
        {
          touched &&
          (error &&
            <ErrorContainer className={errorClassName} errorMessage={error} id={id ? `${id}-error` : undefined}/>)
        }
      </TextBox>
    );
  }
}

