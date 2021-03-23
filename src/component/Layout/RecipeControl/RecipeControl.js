import Select from '../RecipeControl/Select/Select';
import Slider from '../RecipeControl/Slider/Slider';
import TextInput from '../RecipeControl/TextInput/TextInput';
import ButtonGroup from '../../Layout/RecipeControl/ButtonGroup/ButtonGroup';
import classes from '../RecipeControl/RecipeControl.module.scss';

const RecipeControl = () => {
  const recipeInfo = [
    { label: 'Camera Model', options: 'cameraModel', disabled: true },
    { label: 'Film Simulation', options: 'filmSimulation', disabled: false },
    { label: 'Dynmaic Range', options: 'dynmaicRange', disabled: false },
    { label: 'Grain Effect', options: 'grainEffect', disabled: false, multiOptions: true },

    { label: 'Color Chrome', options: 'colorChrome', disabled: false },
    { label: 'Color Chrome Blue', options: 'colorChromeBlue', disabled: false },
  ];

  const recipeTone = [
    { label: 'Noise Reduction', name: 'noiseReduction', disabled: true },
    { label: 'Hightlight', name: 'highlight', disabled: false },
    { label: 'Shadow', name: 'shadow', disabled: false },
    { label: 'Color', name: 'color', disabled: false },
    { label: 'Sharpness', name: 'sharpness', disabled: false },
    { label: 'Clarity', name: 'clarity', disabled: false },
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
        <TextInput label="White Balance" name="whiteBalance" placeholder="7100k, R:-4 B:-2" />
      </div>
      {/* ISO */}
      <div className={classes.ControlComponent}>
        <TextInput label="ISO" name="iso" placeholder="Auto, up to iso 6400" />
      </div>
      {/* Exposure Compensation */}
      <div className={classes.FullWidthComponent}>
        <Slider label="Exposure compensation (1/3ev step)" name="expoComp" step={1 / 3} />
      </div>
      {/* Filter */}
      <div className={classes.FullWidthComponent}>
        <TextInput label="Filter" name="filter" placeholder=" " />
      </div>
      <ButtonGroup />
    </div>
  );
};
export default RecipeControl;
