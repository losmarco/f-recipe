import { useState, createContext, useReducer } from 'react';
import recipeReducer from './RecipeReducer';
import { UPDATE_RECIPE, TOGGLE_RECIPE, RESET_RECIPE } from './RecipeActions';
import domtoimage from 'dom-to-image';
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
      label: 'Film',
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
      label: 'Hightlight',
      value: 0,
      checked: true,
    },
    {
      nameID: 'shadow',
      label: 'Shadow',
      value: 0,
      checked: true,
    },
    {
      nameID: 'color',
      label: 'Color',
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
      label: 'Clarity',
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
      value: 0,
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
    console.log(canvasRef.current);
    domtoimage.toPng(canvasRef.current).then(function (blob) {
      let link = document.createElement('a');

      link.download = 'frecipe-name';
      link.href = blob;
      link.click();
      link.remove();
    });
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
