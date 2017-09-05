
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css'

const Button = ({ type, children, theme }) => {
  return (
    <button type={type} className={theme.button}>
      { children || 'Button' }
    </button>
  );
};

Button.defaultProps = {
  theme: style,
  type: 'button',
};

Button.propTypes = {
  theme: PropTypes.shape({
    button: PropTypes.string.isRequired,
  }),
  type: PropTypes.string,
};

export default Button;