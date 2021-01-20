import React, { Fragment } from 'react';
import classes from '../TextInput/TextInput.module.scss';

const textInput = (props) => {
  return (
    <Fragment>
      <div className={classes.TextInputLabel}>
        <label>{props.label}</label>
      </div>
      <div>
        <div className={classes.InputBox}>
          <input type="text" placeholder={props.placeholder} />
        </div>
      </div>

      {/* value={} onChange={} */}
    </Fragment>
  );
};

export default textInput;
