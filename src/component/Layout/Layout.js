import classes from '../Layout/Layout.module.scss';
import RecipeControl from '../Layout/RecipeControl/RecipeControl';
import DragAndDrop from '../Layout/DragAndDrop/DragAndDrop';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
const Layout = () => {
  return (
    <div className={classes.Layout}>
      <div className={classes.RecipeControlPanel}>
        <RecipeControl />
      </div>
      <div className={classes.RecipeDisplay}>
        <Header />
        <DragAndDrop />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
