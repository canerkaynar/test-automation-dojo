import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'

const Label = ({ className, inputId, text, isRequired }) => {
  const labelStyle = cx({
    [className]: !!className,
    [Styles.isRequired]: isRequired
  });

  return <label className={labelStyle} htmlFor={inputId}>{text}</label>
}

Label.propTypes = {
  inputId: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  isRequired: PropTypes.bool
};

Label.defaultProps = {
  isRequired: false
};

export default Label;
