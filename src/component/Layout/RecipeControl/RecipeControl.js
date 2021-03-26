import { useContext } from 'react';

import Select from '../RecipeControl/Select/Select';
import Slider from '../RecipeControl/Slider/Slider';
import TextInput from '../RecipeControl/TextInput/TextInput';
import Button from '../RecipeControl/Button/Button';
import classes from '../RecipeControl/RecipeControl.module.scss';
import { RecipeContext } from '../../../context/RecipeContext';

const RecipeControl = () => {
  const { state, resetRecipe, exportRecipe } = useContext(RecipeContext);

  const recipeInfo = [
    { label: 'Camera Model', options: 'cameraModel', disabled: state[0].disabled },
    { label: 'Film Simulation', options: 'filmSimulation', disabled: state[1].disabled },
    { label: 'Dynmaic Range', options: 'dynmaicRange', disabled: state[2].disabled },
    { label: 'Grain Effect', options: 'grainEffect', disabled: state[3].disabled, multiOptions: true },
    { label: 'Color Chrome', options: 'colorChrome', disabled: state[4].disabled },
    { label: 'Color Chrome Blue', options: 'colorChromeBlue', disabled: state[5].disabled },
  ];

  const recipeTone = [
    { label: 'Noise Reduction', name: 'noiseReduction', disabled: state[6].disabled },
    { label: 'Hightlight', name: 'highlight', disabled: state[7].disabled },
    { label: 'Shadow', name: 'shadow', disabled: state[8].disabled },
    { label: 'Color', name: 'color', disabled: state[9].disabled },
    { label: 'Sharpness', name: 'sharpness', disabled: state[10].disabled },
    { label: 'Clarity', name: 'clarity', disabled: state[11].disabled },
  ];

  return (
    <div className={classes.ControlComponentLayout}>
      {/* Camera Info */}
      {recipeInfo.map(({ label, options, disabled }) => (
        <div className={classes.ControlComponent} key={options}>
          <Select label={label} options={options} disabled={disabled} />
        </div>
      ))}

      {/* Camera Tone */}
      {recipeTone.map(({ label, name, disabled }) => (
        <div className={classes.ControlComponent} key={name}>
          <Slider label={label} name={name} step={1} disabled={disabled} />
        </div>
      ))}

      {/* White Balance */}
      <div className={classes.ControlComponent}>
        <TextInput
          label="White Balance"
          name="whiteBalance"
          placeholder="7100k, R:-4 B:-2"
          disabled={state[12].disabled}
        />
      </div>

      {/* ISO */}
      <div className={classes.ControlComponent}>
        <TextInput label="ISO" name="iso" placeholder="Auto, up to iso 6400" disabled={state[13].disabled} />
      </div>

      {/* Exposure Compensation */}
      <div className={classes.FullWidthComponent}>
        <Slider label="Exposure compensation (1/3ev step)" name="expoComp" step={1 / 3} disabled={state[14].disabled} />
      </div>

      {/* Filter */}
      <div className={classes.FullWidthComponent}>
        <TextInput label="Filter" name="filter" placeholder=" " disabled={state[15].disabled} />
      </div>

      {/*Reset and Export Button*/}
      <div className={classes.ButtonGroup}>
        <Button onClick={resetRecipe} disabled={true}>
          Reset
        </Button>
        <Button onClick={exportRecipe} disabled={true}>
          Export
        </Button>
      </div>
    </div>
  );
};
export default RecipeControl;
