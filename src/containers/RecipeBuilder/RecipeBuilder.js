import React, { Component } from 'react';

import classes from '../RecipeBuilder/RecipeBuilder.module.scss';

import RecipeControl from './RecipeControl/RecipeControl';
class RecipeBuilder extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <div className={classes.RecipeControlPanel}>
          <RecipeControl />
        </div>
        <div className={classes.RecipeDisplay}>
          <h1>Display Output</h1>
        </div>
      </div>
    );
  }
}

export default RecipeBuilder;
