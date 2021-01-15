import React, { Component } from 'react';

import classes from './RecipeBuilder.module.scss';

class RecipeBuilder extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <div className={classes.RecipeControlPanel}>
          <h1>Recipe Control Panel</h1>
        </div>
        <div className={classes.RecipeDisplay}>
          <h1>Recipe(Drag and Drop)</h1>
        </div>
      </div>
    );
  }
}

export default RecipeBuilder;
