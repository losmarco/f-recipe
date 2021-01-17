import React, { Component } from 'react';

import classes from '../RecipeBuilder/RecipeBuilder.module.scss';

import Select from './Select/Select';

class RecipeBuilder extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <div className={classes.RecipeControlPanel}>
          <div className={classes.ControlComponent}>
            <Select label="Camera Model" options="cameraModel" />
          </div>
          <div className={classes.ControlComponent}>
            <Select label="Film Simulation" options="filmSimulation" />
          </div>
          <div className={classes.ControlComponent}>
            <Select label="Grain Effect" options="grainEffectAndSize" />
          </div>
          <div className={classes.ControlComponent}>
            <Select label="Dynmaic Range" options="dynmaicRange" />
          </div>
          <div className={classes.ControlComponent}>
            <Select label="Color Chrome" options="colorChrome" />
          </div>
          <div className={classes.ControlComponent}>
            <Select label="Color Chrome Blue" options="colorChromeBlue" />
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
