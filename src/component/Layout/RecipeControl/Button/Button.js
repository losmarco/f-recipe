import React from 'react';

import classes from '../Button/Button.module.scss';

const Button = ({ onClick, children, disabled }) => {
  return (
    <div className={classes.ButtonContainer}>
      <button onClick={onClick} className={disabled ? classes.ButtonDisabled : classes.Button}>
        {children}
      </button>
    </div>
  );
};

export default Button;
