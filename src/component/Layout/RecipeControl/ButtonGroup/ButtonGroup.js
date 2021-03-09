import { useContext } from 'react';
import classes from '../ButtonGroup/ButtonGroup.module.scss';
import Button from '../Button/Button';
import { RecipeContext } from '../../../../context/RecipeContext';

const ButtonGroup = () => {
  const { resetRecipe, exportRecipe } = useContext(RecipeContext);

  return (
    <div className={classes.ButtonGroup}>
      <Button onClick={resetRecipe}>Reset</Button>
      <Button onClick={exportRecipe}>Export</Button>
    </div>
  );
};

export default ButtonGroup;
