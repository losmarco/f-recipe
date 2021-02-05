import { useState, useEffect, useRef } from 'react';
import classes from '../Layout/Layout.module.scss';
import RecipeControl from '../Layout/RecipeControl/RecipeControl';

import DragAndDrop from '../Layout/DragAndDrop/DragAndDrop';

//Custom Hook for the Recipe Display div size
const useDivSize = (RecipeDisplay) => {
  const [size, setSize] = useState([]);
  useEffect(() => {
    const rd = RecipeDisplay.current;
    setSize([rd.clientWidth, rd.clientHeight]);
    const handleResize = () => {
      setSize([rd.clientWidth, rd.clientHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [RecipeDisplay]);
  return size;
};

const Layout = () => {
  const RecipeDisplay = useRef(null);
  const [width, height] = useDivSize(RecipeDisplay);
  const size = { width: width, height: height };

  return (
    <div className={classes.Layout}>
      <div className={classes.RecipeControlPanel}>
        <RecipeControl />
      </div>
      <div className={classes.RecipeDisplay} ref={RecipeDisplay}>
        <DragAndDrop divSize={size} />
      </div>
    </div>
  );
};

export default Layout;
