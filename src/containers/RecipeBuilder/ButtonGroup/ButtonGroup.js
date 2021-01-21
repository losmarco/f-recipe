import React from 'react';

import classes from '../ButtonGroup/ButtonGroup.module.scss';

import Button from '../../../components/Button/Button';

const ButtonGroup = () => {
  return (
    <div className={classes.ButtonGroup}>
      <Button>Reset</Button>
      <Button>Export</Button>
    </div>
  );
};

export default ButtonGroup;
