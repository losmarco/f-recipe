import { useContext } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import classes from '../RangeSlider/RangeSlider.module.scss';
import { RecipeContext } from '../../../../context/RecipeContext';
import { expoComp } from '../../../../docs/data';
let Fraction = require('fraction.js');
const { Range } = Slider;

const RangeSlider = ({ label, name }) => {
  const { updateRecipe } = useContext(RecipeContext);

  const dToF = (value) => {
    let a = new Fraction(value[0]).toFraction(true);
    let b = new Fraction(value[1]).toFraction(true);
    let arr = [a, b];
    return arr;
  };
  return (
    <>
      <div className={classes.RangeSliderLabel}>
        <label>{label}</label>
      </div>
      <Range
        className={classes.RangeSliderInput}
        min={expoComp.min}
        max={expoComp.max}
        defaultValue={[0, 0]}
        // onChange={(value) => updateRecipe(name, value)}
        onChange={(value) => updateRecipe(name, dToF(value))}
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
