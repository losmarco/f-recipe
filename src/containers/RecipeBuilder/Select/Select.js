import React, { useState, Fragment } from 'react';
import Select from 'react-select';

import classes from '../Select/Select.module.scss';
import {
  cameraModel,
  filmSimulation,
  grainEffectAndSize,
  dynmaicRange,
  colorChrome,
} from '../../../docs/data';

export default function SelectInput(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  function renderSelectData() {
    switch (props.options) {
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
  }
  return (
    <Fragment>
      <div className={classes.Label}>
        <label>{props.label}</label>
      </div>
      <Select
        className={classes.Select}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={renderSelectData(props.options)}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#404854',
            primary25: '#BABCC0',
          },
        })}
      />
    </Fragment>
  );
}
