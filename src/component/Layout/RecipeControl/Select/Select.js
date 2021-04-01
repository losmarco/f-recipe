import { useState, useContext } from 'react';
import Select from 'react-select';
import classes from '../Select/Select.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import { RecipeContext } from '../../../../context/RecipeContext';
import { cameraModel, filmSimulation, grainEffect, dynmaicRange, colorChrome } from '../../../../docs/data';

const SelectInput = ({ label, options, disabled, checkbox }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { updateRecipe } = useContext(RecipeContext);
  const renderSelectData = (options) => {
    switch (options) {
      case 'cameraModel':
        return cameraModel;
      case 'filmSimulation':
        return filmSimulation;
      case 'grainEffect':
        return grainEffect;
      case 'dynmaicRange':
        return dynmaicRange;
      case 'colorChrome':
        return colorChrome;
      case 'colorChromeBlue':
        return colorChrome;
      default:
        return null;
    }
  };

  const getType = (e) => {
    let name = options;
    let value = e.label;
    updateRecipe(name, value);
  };

  return (
    <>
      <div className={classes.SelectTitle}>
        <div className={classes.Label}>
          <label>{label}</label>
        </div>
        {checkbox ? <Checkbox elementID={label} /> : null}
      </div>

      <Select
        isDisabled={disabled}
        maxMenuHeight={220}
        className={classes.Select}
        defaultValue={selectedOption}
        onChange={setSelectedOption && getType}
        options={renderSelectData(options)}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#404854',
            primary25: '#BABCC0',
            neutral0: '#EDF2F7',
            neutral5: '#BABCC0',
          },
        })}
      />
    </>
  );
};

export default SelectInput;
