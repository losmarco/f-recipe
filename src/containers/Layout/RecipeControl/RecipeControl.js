import React from 'react';

import RangeSlider from '../RangeSlider/RangeSlider';
import Select from '../Select/Select';
import Slider from '../Slider/Slider';
import TextInput from '../TextInput/TextInput';

import classes from '../RecipeControl/RecipeControl.module.scss';
const RecipeControl = () => {
  return (
    <div className={classes.ControlComponentLayout}>
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
      <div className={classes.ControlComponent}>
        <TextInput label="White Balance" placeholder="7100k, R:-4 B:-2" />
      </div>
      <div className={classes.ControlComponent}>
        <TextInput label="ISO" placeholder="Auto, up to iso 6400" />
      </div>
      <div className={classes.FullWidthComponent}>
        <RangeSlider
          label="Exposure compensation (1/3ev step)"
          name="expoComp"
        />
      </div>
      <div className={classes.FullWidthComponent}>
        <TextInput label="Filter" placeholder=" " />
      </div>
    </div>
  );
};
export default RecipeControl;
