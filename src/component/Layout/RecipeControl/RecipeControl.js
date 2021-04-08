import { useContext } from 'react';

import Select from '../RecipeControl/Select/Select';
import Slider from '../RecipeControl/Slider/Slider';
import TextInput from '../RecipeControl/TextInput/TextInput';
import Button from '../RecipeControl/Button/Button';
import classes from '../RecipeControl/RecipeControl.module.scss';
import { RecipeContext } from '../../../context/RecipeContext';

const RecipeControl = () => {
  const { state, discardRecipe, exportRecipe } = useContext(RecipeContext);
  const recipe = state.recipe;
  const buttonDisabled = state.button;
  const recipeInfo = [
    { label: 'Camera Model', options: 'cameraModel', disabled: recipe[0].disabled },
    { label: 'Film Simulation', options: 'filmSimulation', disabled: recipe[1].disabled },
    { label: 'Dynmaic Range', options: 'dynmaicRange', disabled: recipe[2].disabled },
    { label: 'Grain Effect', options: 'grainEffect', disabled: recipe[3].disabled },
    { label: 'Color Chrome', options: 'colorChrome', disabled: recipe[4].disabled, checkbox: true },
    { label: 'Color Chrome Blue', options: 'colorChromeBlue', disabled: recipe[5].disabled, checkbox: true },
  ];

  const recipeTone = [
    { label: 'Noise Reduction', name: 'noiseReduction', disabled: recipe[6].disabled },
    { label: 'Hightlight', name: 'highlight', disabled: recipe[7].disabled },
    { label: 'Shadow', name: 'shadow', disabled: recipe[8].disabled },
    { label: 'Color', name: 'color', disabled: recipe[9].disabled },
    { label: 'Sharpness', name: 'sharpness', disabled: recipe[10].disabled, checkbox: true },
    { label: 'Clarity', name: 'clarity', disabled: recipe[11].disabled, checkbox: true },
  ];

  return (
    <div className={classes.ControlComponentLayout}>
      {/* Camera Info */}
      {recipeInfo.map(({ label, options, disabled, checkbox }) => (
        <div className={classes.ControlComponent} key={options}>
          <Select label={label} options={options} disabled={disabled} checkbox={checkbox} />
        </div>
      ))}

      {/* Camera Tone */}
      {recipeTone.map(({ label, name, disabled, checkbox }) => (
        <div className={classes.ControlComponent} key={name}>
          <Slider label={label} name={name} step={1} disabled={disabled} checkbox={checkbox} />
        </div>
      ))}

      {/* White Balance */}
      <div className={classes.ControlComponent}>
        <TextInput
          label="White Balance"
          name="whiteBalance"
          placeholder="7100k, R:-4 B:-2"
          disabled={recipe[12].disabled}
        />
      </div>

      {/* ISO */}
      <div className={classes.ControlComponent}>
        <TextInput label="ISO" name="iso" placeholder="Auto, up to iso 6400" disabled={recipe[13].disabled} />
      </div>

      {/* Exposure Compensation */}
      <div className={classes.FullWidthComponent}>
        <Slider
          label="Exposure compensation (1/3ev step)"
          name="expoComp"
          step={1 / 3}
          disabled={recipe[14].disabled}
        />
      </div>

      {/* Filter */}
      <div className={classes.FullWidthComponent}>
        <TextInput label="Filter" name="filter" placeholder=" " disabled={recipe[15].disabled} />
      </div>

      {/*Reset and Export Button*/}
      <div className={classes.ButtonGroup}>
        <Button onClick={discardRecipe} disabled={buttonDisabled}>
          Discard
        </Button>
        <Button onClick={exportRecipe} disabled={buttonDisabled}>
          Export
        </Button>
      </div>
    </div>
  );
};
export default RecipeControl;
