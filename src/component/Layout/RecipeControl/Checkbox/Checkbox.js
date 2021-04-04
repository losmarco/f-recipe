import { useContext } from 'react';
import classes from '../Checkbox/Checkbox.module.scss';
import { RecipeContext } from '../../../../context/RecipeContext';
const Checkbox = ({ elementID, name }) => {
  const { toggleRecipe } = useContext(RecipeContext);

  return (
    <>
      <label htmlFor={elementID}>
        <input
          id={elementID}
          type="checkbox"
          className={classes.Checkbox}
          defaultChecked
          onClick={() => toggleRecipe(name)}
        />
        <div className={classes.CustomCheckbox} />
      </label>
    </>
  );
};

export default Checkbox;
