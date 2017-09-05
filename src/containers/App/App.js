import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import Button from '../../components/Button';

const App = ({ theme }) => {
  return (
    <div className={theme.app}>
        <Button />
    </div>
  );
};

App.defaultProps = {
  theme: style,
}

App.propTypes = {
  theme: PropTypes.shape({
    app: PropTypes.string.isRequired,
  })
};

export default App;
