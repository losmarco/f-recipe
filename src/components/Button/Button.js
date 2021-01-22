import React from 'react';

import classes from '../Button/Button.module.scss';

const Button = ({ onClick, type, children }) => {
  return (
    <div className={classes.ButtonContainer}>
      <button onClick={onClick} type={type} className={classes.Button}>
        {children}
      </button>
    </div>
  );
};

export default Button;
