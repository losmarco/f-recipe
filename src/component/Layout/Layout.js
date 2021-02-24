import classes from '../Layout/Layout.module.scss';
import RecipeControl from '../Layout/RecipeControl/RecipeControl';
import DragAndDrop from '../Layout/DragAndDrop/DragAndDrop';

const Layout = () => {
  return (
    <div className={classes.Layout}>
      <div className={classes.RecipeControlPanel}>
        <RecipeControl />
      </div>
      <div className={classes.RecipeDisplay}>
        <DragAndDrop />
      </div>
    </div>
  );
};

export default Layout;
