import React, { Component } from 'react';

import classes from '../RecipeBuilder/RecipeBuilder.module.scss';

import Select from './Select/Select';
import Slider from './Slider/Slider';
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
          <div className={classes.ControlComponent}>
            <Slider label="Noise Reduction" name="noiseReduction" />
          </div>
          <div className={classes.ControlComponent}>
            <Slider label="Hightlight" name="highlight" />
          </div>
          <div className={classes.ControlComponent}>
            <Slider label="Shadow" name="shadow" />
          </div>
          <div className={classes.ControlComponent}>
            <Slider label="Color" name="color" />
          </div>
          <div className={classes.ControlComponent}>
            <Slider label="Sharpness" name="sharpness" />
          </div>
          <div className={classes.ControlComponent}>
            <Slider label="Clarity" name="clarity" />
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
