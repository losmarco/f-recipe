import React, { Fragment } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import classes from '../Slider/Slider.module.scss';

import {
  noiseReduction,
  highlight,
  shadow,
  color,
  sharpness,
  clarity,
} from '../../../docs/data';

const SliderInput = (props) => {
  function renderMinMaxData() {
    switch (props.name) {
      case 'noiseReduction':
        return noiseReduction;
      case 'highlight':
        return highlight;
      case 'shadow':
        return shadow;
      case 'color':
        return color;
      case 'sharpness':
        return sharpness;
      case 'clarity':
        return clarity;
      default:
        return null;
    }
  }

  return (
    <Fragment>
      <div className={classes.SliderLabel}>
        <label>{props.label}</label>
      </div>
      <Slider
        className={classes.SliderInput}
        min={renderMinMaxData(props.name).min}
        max={renderMinMaxData(props.name).max}
        defaultValue={0}
        startPoint={0}
        marks={renderMinMaxData(props.name).marks}
        // value={/*Set current value of slider*/}
        railStyle={{ backgroundColor: '#EDF2F7' }}
        trackStyle={[{ backgroundColor: '#6B7280' }]}
        handleStyle={{
          borderColor: '#eee',
          backgroundColor: '#232F3E',
        }}
        dotStyle={{
          display: 'none',
        }}
        activeDotStyle={{
          border: 'red',
        }}
      />
    </Fragment>
  );
};

export default SliderInput;