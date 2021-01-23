import { useState } from 'react';
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
} from '../../../../docs/data';

const SliderInput = ({ label, name }) => {
  const [sliderPoint, setSliderPoint] = useState(0);

  const renderMinMaxData = (name) => {
    switch (name) {
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
  };

  return (
    <>
      <div className={classes.SliderLabel}>
        <label>{label}</label>
      </div>
      <Slider
        className={classes.SliderInput}
        min={renderMinMaxData(name).min}
        max={renderMinMaxData(name).max}
        defaultValue={sliderPoint}
        onChange={(value) => setSliderPoint(value)}
        startPoint={0}
        marks={renderMinMaxData(name).marks}
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
    </>
  );
};

export default SliderInput;
