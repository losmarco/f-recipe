import Select from '../RecipeControl/Select/Select';
import Slider from '../RecipeControl/Slider/Slider';
import TextInput from '../RecipeControl/TextInput/TextInput';
import ButtonGroup from '../../Layout/RecipeControl/ButtonGroup/ButtonGroup';
import classes from '../RecipeControl/RecipeControl.module.scss';

const RecipeControl = () => {
  const recipeInfo = [
    { label: 'Camera Model', options: 'cameraModel' },
    { label: 'Film Simulation', options: 'filmSimulation' },
    { label: 'Grain Effect', options: 'grainEffectAndSize' },
    { label: 'Dynmaic Range', options: 'dynmaicRange' },
    { label: 'Color Chrome', options: 'colorChrome' },
    { label: 'Color Chrome Blue', options: 'colorChromeBlue' },
  ];

  const recipeTone = [
    { label: 'Noise Reduction', name: 'noiseReduction' },
    { label: 'Hightlight', name: 'highlight' },
    { label: 'Shadow', name: 'shadow' },
    { label: 'Color', name: 'color' },
    { label: 'Sharpness', name: 'sharpness' },
    { label: 'Clarity', name: 'clarity' },
  ];

  return (
    <div className={classes.ControlComponentLayout}>
      {/* Camera Info */}
      {recipeInfo.map(({ label, options }) => (
        <div className={classes.ControlComponent} key={options}>
          <Select label={label} options={options} />
        </div>
      ))}

      {/* Camera Tone */}
      {recipeTone.map(({ label, name }) => (
        <div className={classes.ControlComponent} key={name}>
          <Slider label={label} name={name} step={1} />
        </div>
      ))}
      {/* White Balance */}
      <div className={classes.ControlComponent}>
        <TextInput
          label="White Balance"
          name="whiteBalance"
          placeholder="7100k, R:-4 B:-2"
        />
      </div>
      {/* ISO */}
      <div className={classes.ControlComponent}>
        <TextInput label="ISO" name="iso" placeholder="Auto, up to iso 6400" />
      </div>
      {/* Exposure Compensation */}
      <div className={classes.FullWidthComponent}>
        <Slider
          label="Exposure compensation (1/3ev step)"
          name="expoComp"
          step={1 / 3}
        />
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
