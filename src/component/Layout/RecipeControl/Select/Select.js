import { useState } from 'react';
import Select from 'react-select';

import classes from '../Select/Select.module.scss';
import {
  cameraModel,
  filmSimulation,
  grainEffectAndSize,
  dynmaicRange,
  colorChrome,
} from '../../../../docs/data';

const SelectInput = ({ label, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const renderSelectData = (options) => {
    switch (options) {
      case 'cameraModel':
        return cameraModel;
      case 'filmSimulation':
        return filmSimulation;
      case 'grainEffectAndSize':
        return grainEffectAndSize;
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
  return (
    <>
      <div className={classes.Label}>
        <label>{label}</label>
      </div>
      <Select
        maxMenuHeight={220}
        className={classes.Select}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={renderSelectData(options)}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#404854',
            primary25: '#BABCC0',
            neutral0: '#EDF2F7',
          },
        })}
      />
    </>
  );
};

export default SelectInput;
