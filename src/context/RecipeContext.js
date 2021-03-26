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
      disabled: true,
    },
    {
      nameID: 'filmSimulation',
      label: 'Film',
      value: null,
      disabled: false,
    },
    {
      nameID: 'dynmaicRange',
      label: 'DR',
      value: null,
      disabled: false,
    },
    {
      nameID: 'grainEffect',
      label: 'Grain Effect',
      value: null,
      disabled: false,
    },

    {
      nameID: 'colorChrome',
      label: 'Color Chrome',
      value: null,
      disabled: false,
    },
    {
      nameID: 'colorChromeBlue',
      label: 'Color Chrome Blue',
      value: null,
      disabled: false,
    },
    {
      nameID: 'noiseReduction',
      label: 'NR',
      value: 0,
      disabled: false,
    },
    {
      nameID: 'highlight',
      label: 'Hightlight',
      value: 0,
      disabled: false,
    },
    {
      nameID: 'shadow',
      label: 'Shadow',
      value: 0,
      disabled: false,
    },
    {
      nameID: 'color',
      label: 'Color',
      value: 0,
      disabled: false,
    },
    {
      nameID: 'sharpness',
      label: 'Sharpness',
      value: 0,
      disabled: false,
    },
    {
      nameID: 'clarity',
      label: 'Clarity',
      value: 0,
      disabled: false,
    },
    {
      nameID: 'whiteBalance',
      label: 'WB',
      value: '',
      disabled: false,
    },
    {
      nameID: 'iso',
      label: 'ISO',
      value: '',
      disabled: false,
    },
    {
      nameID: 'expoComp',
      label: 'EV',
      value: 0,
      disabled: false,
    },
    {
      nameID: 'filter',
      label: 'Filter',
      value: '',
      disabled: false,
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
  //EXPORT
  const exportRecipe = () => {
    const node = canvasRef.current;
    const wScale = 1080 / node.offsetWidth;
    const hScale = 1080 / node.offsetHeight;
    domtoimage
      .toJpeg(node, {
        height: node.offsetHeight * hScale,
        width: node.offsetWidth * wScale,
        style: {
          transform: `scale(${wScale},${hScale})`,
          transformOrigin: 'top left',
          width: node.offsetWidth + 'px',
          height: node.offsetHeight + 'px',
        },
      })
      .then(function (blob) {
        let link = document.createElement('a');
        link.download = 'frecipe-name';
        link.href = blob;
        link.click();
        link.remove();
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
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
