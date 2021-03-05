import { useContext } from 'react';
import classes from '../Dom/Dom.module.scss';
import { RecipeContext } from '../../../../context/RecipeContext';
let Fraction = require('fraction.js');
const Dom = ({ photo }) => {
  const { state } = useContext(RecipeContext);

  let canvasWidth = 1080;
  let canvasHeight = 1080;
  let image = photo[0];

  return (
    <>
      <div className={classes.Dom} width={canvasWidth} height={canvasHeight}>
        <img
          className={classes.Image}
          src={image.preview}
          alt={image.name}
        ></img>
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
    </>
  );
};

export default Dom;
