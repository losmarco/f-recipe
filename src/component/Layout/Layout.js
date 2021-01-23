import classes from '../Layout/Layout.module.scss';

import RecipeControl from '../Layout/RecipeControl/RecipeControl';
import ButtonGroup from '../Layout/RecipeControl/ButtonGroup/ButtonGroup';
const Layout = () => {
  return (
    <div className={classes.Layout}>
      <div className={classes.RecipeControlPanel}>
        <RecipeControl />
        <ButtonGroup />
      </div>
      <div className={classes.RecipeDisplay}>
        <h1>{}</h1>
      </div>
    </div>
  );
};

export default Layout;
