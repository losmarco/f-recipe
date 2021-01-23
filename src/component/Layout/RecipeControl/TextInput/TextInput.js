import { useState } from 'react';
import classes from '../TextInput/TextInput.module.scss';

const TextInput = ({ label, placeholder }) => {
  const [textInput, setTextInput] = useState('');
  return (
    <>
      <div className={classes.TextInputLabel}>
        <label>{label}</label>
      </div>
      <div>
        <div className={classes.InputBox}>
          <input
            type="text"
            placeholder={placeholder}
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default TextInput;
