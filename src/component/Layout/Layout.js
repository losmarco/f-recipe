import classes from '../Layout/Layout.module.scss';

import RecipeControl from '../Layout/RecipeControl/RecipeControl';
import ButtonGroup from '../Layout/RecipeControl/ButtonGroup/ButtonGroup';
import DragAndDrop from '../Layout/DragAndDrop/DragAndDrop';
const Layout = () => {
  return (
    <div className={classes.Layout}>
      <div className={classes.RecipeControlPanel}>
        <RecipeControl />
        <ButtonGroup />
      </div>
      <div className={classes.RecipeDisplay}>
        <DragAndDrop />
      </div>
    </div>
  );
};

export default Layout;
