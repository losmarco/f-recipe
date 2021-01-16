import React, { Component } from 'react';

import classes from '../RecipeBuilder/RecipeBuilder.module.scss';

import Select from './Select/Select';

class RecipeBuilder extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <div className={classes.RecipeControlPanel}>
          <div className={classes.ControlComponent}>
            <Select label="Camera Model" />
          </div>
        </div>
        <div className={classes.RecipeDisplay}>
          <h1>Display Output</h1>
        </div>
      </div>
    );
  }
}

export default RecipeBuilder;
