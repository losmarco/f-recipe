import { useContext, useRef, useEffect } from 'react';
import classes from '../Dom/Dom.module.scss';
import { RecipeContext } from '../../../../context/RecipeContext';
// import domtoimage from 'dom-to-image';
let Fraction = require('fraction.js');
const Dom = ({ photo }) => {
  const { state, setCanvasRef } = useContext(RecipeContext);
  const canvasRef = useRef(null);
  let canvasWidth = 1080;
  let canvasHeight = 1080;
  let image = photo[0];
  useEffect(() => {
    setCanvasRef(canvasRef);
  }, [setCanvasRef]);
  return (
    <>
      <div
        ref={canvasRef}
        className={classes.Dom}
        width={canvasWidth}
        height={canvasHeight}
      >
        <div className={classes.Content}>
          <div className={classes.ImageContainer}>
            <img
              className={classes.Image}
              src={image.preview}
              alt={image.name}
            />
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
                    {e.label}: {num[0]}{' '}
                    <span className={classes.RecipeTextFraction}>{num[1]}</span>
                  </div>
                );
              } else {
                return (
                  <div className={classes.RecipeText} key={e.nameID}>
                    {e.label}:{e.value}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dom;
