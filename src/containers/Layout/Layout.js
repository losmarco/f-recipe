import React from 'react';

import classes from '../Layout/Layout.module.scss';

import RecipeControl from './RecipeControl/RecipeControl';
import ButtonGroup from './ButtonGroup/ButtonGroup';
const Layout = () => {
  return (
    <div className={classes.Layout}>
      <div className={classes.RecipeControlPanel}>
        <RecipeControl />
        <ButtonGroup />
      </div>
      <div className={classes.RecipeDisplay}>
        <h1>Display Output</h1>
      </div>
    </div>
  );
};

export default Layout;
