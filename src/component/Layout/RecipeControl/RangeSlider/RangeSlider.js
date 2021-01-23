import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import classes from '../RangeSlider/RangeSlider.module.scss';
import { expoComp } from '../../../../docs/data';
const { Range } = Slider;

const RangeSlider = ({ label }) => {
  const [rangeValue, setRangeValue] = useState([0, 0]);
  return (
    <>
      <div className={classes.RangeSliderLabel}>
        <label>{label}</label>
      </div>
      <Range
        className={classes.RangeSliderInput}
        min={expoComp.min}
        max={expoComp.max}
        defaultValue={rangeValue}
        onChange={(value) => setRangeValue(value)}
        marks={expoComp.marks}
        step={1 / 3}
        // value={/*Set current value of slider*/}
        railStyle={{ backgroundColor: '#EDF2F7' }}
        trackStyle={[{ backgroundColor: '#6B7280' }]}
        handleStyle={[
          {
            borderColor: '#eee',
            backgroundColor: '#232F3E',
          },
          {
            borderColor: '#eee',
            backgroundColor: '#232F3E',
          },
        ]}
        dotStyle={{
          display: 'none',
        }}
      />
    </>
  );
};

export default RangeSlider;
