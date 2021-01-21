import React, { Component } from 'react';

import classes from '../RecipeBuilder/RecipeBuilder.module.scss';

import RecipeControl from './RecipeControl/RecipeControl';
import ButtonGroup from '../RecipeBuilder/ButtonGroup/ButtonGroup';
class RecipeBuilder extends Component {
  render() {
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
  }
}

export default RecipeBuilder;
