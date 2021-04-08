import classes from '../Layout/Layout.module.scss';
import RecipeControl from '../Layout/RecipeControl/RecipeControl';
import DragAndDrop from '../Layout/DragAndDrop/DragAndDrop';

import Footer from '../Layout/Footer/Footer';
const Layout = () => {
  return (
    <div className={classes.Layout}>
      <section className={classes.RecipeControlPanel}>
        <RecipeControl />
      </section>
      <section className={classes.RecipeDisplay}>
        <DragAndDrop />
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
