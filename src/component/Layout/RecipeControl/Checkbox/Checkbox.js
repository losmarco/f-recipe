import { useContext } from 'react';
import classes from '../Checkbox/Checkbox.module.scss';
import { RecipeContext } from '../../../../context/RecipeContext';
const Checkbox = ({ elementID, name }) => {
  const { state, toggleRecipe } = useContext(RecipeContext);

  const updateState = () => {
    toggleRecipe(name);
  };

  let isDisabled = state.checkbox;
  return (
    <>
      <label htmlFor={elementID}>
        <input
          id={elementID}
          type="checkbox"
          className={classes.Checkbox}
          disabled={isDisabled}
          defaultChecked
          onClick={() => updateState()}
        />
        <div className={isDisabled ? classes.CustomCheckboxDisabled : classes.CustomCheckbox} />
      </label>
    </>
  );
};

export default Checkbox;
