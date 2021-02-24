import { createContext, useReducer } from 'react';
import recipeReducer from './RecipeReducer';
import { UPDATE_RECIPE, TOGGLE_RECIPE } from './RecipeActions';

export const RecipeProvider = ({ children }) => {
  const initState = [
    {
      nameID: 'cameraModel',
      label: 'Camera',
      value: null,
      checked: true,
    },
    {
      nameID: 'filmSimulation',
      label: 'Film Simulation',
      value: null,
      checked: true,
    },
    {
      nameID: 'grainEffectAndSize',
      label: 'Grain Effect',
      value: null,
      checked: true,
    },
    {
      nameID: 'dynmaicRange',
      label: 'DR',
      value: null,
      checked: true,
    },
    {
      nameID: 'colorChrome',
      label: 'Color Chrome',
      value: null,
      checked: true,
    },
    {
      nameID: 'colorChromeBlue',
      label: 'Color Chrome Blue',
      value: null,
      checked: true,
    },
    {
      nameID: 'noiseReduction',
      label: 'NR',
      value: null,
      checked: true,
    },
    {
      nameID: 'highlight',
      label: 'H',
      value: null,
      checked: true,
    },
    {
      nameID: 'shadow',
      label: 'S',
      value: null,
      checked: true,
    },
    {
      nameID: 'color',
      label: 'C',
      value: null,
      checked: true,
    },
    {
      nameID: 'sharpness',
      label: 'Sharpness',
      value: null,
      checked: true,
    },
    {
      nameID: 'clarity',
      label: 'C',
      value: null,
      checked: true,
    },
    {
      nameID: 'expoComp',
      label: 'Expo Comp',
      value: null,
      checked: true,
    },
    {
      nameID: 'filter',
      label: 'Filter',
      value: null,
      checked: true,
    },
  ];
  const [state, dispatch] = useReducer(recipeReducer, initState);
  //UPDATE
  const updateRecipe = (name, value) => {
    dispatch({
      type: UPDATE_RECIPE,
      payload: {
        currentNameID: name,
        value: value,
      },
    });
  };
  //TOGGLE
  const toggleRecipe = (nameID) => {
    dispatch({
      type: TOGGLE_RECIPE,
      payload: nameID,
    });
  };
  return (
    <RecipeContext.Provider value={{ state, updateRecipe, toggleRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const RecipeContext = createContext();
