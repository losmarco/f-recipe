import { useContext } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import classes from '../Slider/Slider.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import { RecipeContext } from '../../../../context/RecipeContext';
import { noiseReduction, highlight, shadow, color, sharpness, clarity, expoComp } from '../../../../docs/data';

const SliderInput = ({ label, name, step, disabled, checkbox }) => {
  const { updateRecipe } = useContext(RecipeContext);
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
      case 'expoComp':
        return expoComp;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={classes.SliderTitle}>
        <div className={classes.SliderLabel}>
          <label>{label}</label>
        </div>
        {checkbox ? <Checkbox elementID={label} /> : null}
      </div>

      <Slider
        className={(classes.SliderInput, disabled ? classes.IsDisabled : null)}
        min={renderMinMaxData(name).min}
        max={renderMinMaxData(name).max}
        defaultValue={0}
        step={step}
        onChange={(value) => updateRecipe(name, value)}
        startPoint={0}
        marks={renderMinMaxData(name).marks}
        railStyle={{ backgroundColor: disabled ? '#C9C9C9' : '#EDF2F7' }}
        trackStyle={[{ backgroundColor: '#6B7280' }]}
        handleStyle={{
          borderColor: disabled ? '#9E9E9E' : '#eee',
          backgroundColor: disabled ? '#9E9E9E' : '#232F3E',
        }}
        dotStyle={{
          display: 'none',
        }}
      />
    </>
  );
};

export default SliderInput;
