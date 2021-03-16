import { useState, useContext, useRef, useEffect } from 'react';
import classes from '../Dom/Dom.module.scss';
import { RecipeContext } from '../../../../context/RecipeContext';
let Fraction = require('fraction.js');

const Dom = ({ photo }) => {
  const { state, setCanvasRef } = useContext(RecipeContext);
  const canvasRef = useRef(null);
  useEffect(() => {
    setCanvasRef(canvasRef);
  }, [setCanvasRef]);
  const [isHorizontal, setHorizontal] = useState(true);
  let img = new Image();
  let image = photo[0];
  img.onload = function () {
    //handle vertical and horiztonal image

    //For Horiztonal and width= height
    if (this.width > this.height) {
      setHorizontal(true);
    }
    //vertical
    else {
      setHorizontal(false);
    }
  };
  img.src = image.preview;

  //Uploaded Image and Recipe
  const content = (
    <div className={isHorizontal ? classes.HorizontalContent : classes.VerticalContent}>
      <div className={classes.ImageContainer}>
        <img className={classes.Image} src={image.preview} alt={image.name} />
      </div>

      {/* Display the Recipe */}
      <div className={classes.RecipeGroup}>
        {state.map((e) => {
          if (e.label === 'EV') {
            //Fraction for exposure compensation
            let frac = new Fraction(e.value).toFraction(true);
            let num = frac.split(' ');

            return (
              <div className={classes.RecipeText} key={e.nameID}>
                {e.label}: {num[0]}
                <span className={classes.RecipeTextFraction}>{num[1]}</span>
              </div>
            );
          } else {
            return (
              <div className={classes.RecipeText} key={e.nameID}>
                {e.label}: {e.value}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
  return (
    <>
      <div ref={canvasRef} className={classes.Dom}>
        {content}
      </div>
    </>
  );
};

export default Dom;
