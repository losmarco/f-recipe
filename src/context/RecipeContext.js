import { useState, createContext, useReducer } from 'react';
import recipeReducer from './RecipeReducer';
import { UPDATE_RECIPE, TOGGLE_RECIPE, RESET_RECIPE } from './RecipeActions';

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
      value: 0,
      checked: true,
    },
    {
      nameID: 'highlight',
      label: 'H',
      value: 0,
      checked: true,
    },
    {
      nameID: 'shadow',
      label: 'S',
      value: 0,
      checked: true,
    },
    {
      nameID: 'color',
      label: 'C',
      value: 0,
      checked: true,
    },
    {
      nameID: 'sharpness',
      label: 'Sharpness',
      value: 0,
      checked: true,
    },
    {
      nameID: 'clarity',
      label: 'C',
      value: 0,
      checked: true,
    },
    {
      nameID: 'whiteBalance',
      label: 'WB',
      value: '',
      checked: true,
    },
    {
      nameID: 'iso',
      label: 'ISO',
      value: '',
      checked: true,
    },
    {
      nameID: 'expoComp',
      label: 'EV',
      value: [0, 0],
      checked: true,
    },
    {
      nameID: 'filter',
      label: 'Filter',
      value: '',
      checked: true,
    },
  ];
  const [state, dispatch] = useReducer(recipeReducer, initState);
  const [recipeControl, setrecipeControl] = useState(0);
  const [canvasRef, setCanvasRef] = useState(null);
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
  //RESET
  const resetRecipe = () => {
    dispatch({
      type: RESET_RECIPE,
      payload: initState,
    });
    //dirty way to reset the UI
    setrecipeControl(recipeControl + 1);
  };
  const exportRecipe = () => {
    canvasRef.current.toBlob((blob) => {
      const anchor = document.createElement('a');
      anchor.download = 'recipe.png';
      anchor.href = URL.createObjectURL(blob);
      anchor.click();
      URL.revokeObjectURL(anchor.href);
    }, 'image/jpeg');
  };

  return (
    <RecipeContext.Provider
      key={recipeControl}
      value={{
        state,
        updateRecipe,
        toggleRecipe,
        resetRecipe,
        exportRecipe,
        setCanvasRef,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const RecipeContext = createContext();
