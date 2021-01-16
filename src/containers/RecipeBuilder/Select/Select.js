import React, { useState, Fragment } from 'react';
import Select from 'react-select';

import classes from '../Select/Select.module.scss';
import { cameraModelOptions } from '../../../docs/data';

export default function SelectInput(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Fragment>
      <div className={classes.Label}>
        <label>{props.label}</label>
      </div>
      <Select
        className={classes.Select}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={cameraModelOptions}
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
