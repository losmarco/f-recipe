import { useState } from 'react';
import classes from '../Checkbox/Checkbox.module.scss';
const Checkbox = ({ elementID }) => {
  const [checked, setChecked] = useState(true);
  return (
    <>
      <label htmlFor={elementID}>
        <input
          id={elementID}
          type="checkbox"
          className={classes.Checkbox}
          defaultChecked
          onClick={() => setChecked(!checked)}
        />
        <div className={classes.CustomCheckbox} />
      </label>
    </>
  );
};

export default Checkbox;
