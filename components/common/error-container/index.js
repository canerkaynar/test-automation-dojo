import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'

const Error = ({ errorMessage, className, id }) => {
  let display;
  const errorStyle = cx(Styles.error, {
    [className]: !!className
  });

  if (Array.isArray(errorMessage)) {
    display = errorMessage.map((error, index) =>
      <span key={index} id={id} className={errorStyle}>{error}</span>
    );
  } else {
    display = <span id={id} className={errorStyle}>{errorMessage}</span>;
  }

  return display;
}

Error.propTypes = {
  errorMessage: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.string
  ]).isRequired,
  className: PropTypes.string,
  id: PropTypes.string
}

export default Error;
