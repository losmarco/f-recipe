import { useState, useContext } from 'react';
import classes from '../TextInput/TextInput.module.scss';
import { RecipeContext } from '../../../../context/RecipeContext';
const TextInput = ({ label, name, placeholder }) => {
  const [textInput, setTextInput] = useState('');
  const { updateRecipe } = useContext(RecipeContext);
  const updateType = (e) => {
    setTextInput(e);
    updateRecipe(name, e);
  };
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
            onChange={(e) => updateType(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default TextInput;
