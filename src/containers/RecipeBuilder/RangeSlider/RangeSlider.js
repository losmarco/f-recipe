import React, { Fragment } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import classes from '../RangeSlider/RangeSlider.module.scss';

import { expoComp } from '../../../docs/data';

const RangeSlider = (props) => {
  return (
    <Fragment>
      <div className={classes.RangeSliderLabel}>
        <label>{props.label}</label>
      </div>
      <Range
        className={classes.RangeSliderInput}
        min={expoComp.min}
        max={expoComp.max}
        defaultValue={[0, 0]}
        marks={expoComp.marks}
        // value={/*Set current value of slider*/}
        railStyle={{ backgroundColor: '#EDF2F7' }}
        trackStyle={{ backgroundColor: '#6B7280' }}
        handleStyle={{
          borderColor: '#eee',
          backgroundColor: '#232F3E',
        }}
        dotStyle={{
          display: 'none',
        }}
      />
    </Fragment>
  );
};

export default RangeSlider;
