import { useState, createContext, useReducer } from 'react';
import recipeReducer from './RecipeReducer';
import { UPDATE_RECIPE, TOGGLE_RECIPE, TOGGLE_CHECKBOX_RECIPE, RESET_RECIPE } from './RecipeActions';
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
      disabled: true,
    },
    {
      nameID: 'dynmaicRange',
      label: 'DR',
      value: null,
      disabled: true,
    },
    {
      nameID: 'grainEffect',
      label: 'Grain Effect',
      value: null,
      disabled: true,
    },

    {
      nameID: 'colorChrome',
      label: 'Color Chrome',
      value: null,
      disabled: true,
      checkbox: true,
    },
    {
      nameID: 'colorChromeBlue',
      label: 'Color Chrome Blue',
      value: null,
      disabled: true,
      checkbox: true,
    },
    {
      nameID: 'noiseReduction',
      label: 'NR',
      value: 0,
      disabled: true,
    },
    {
      nameID: 'highlight',
      label: 'Hightlight',
      value: 0,
      disabled: true,
    },
    {
      nameID: 'shadow',
      label: 'Shadow',
      value: 0,
      disabled: true,
    },
    {
      nameID: 'color',
      label: 'Color',
      value: 0,
      disabled: true,
    },
    {
      nameID: 'sharpness',
      label: 'Sharpness',
      value: 0,
      disabled: true,
    },
    {
      nameID: 'clarity',
      label: 'Clarity',
      value: 0,
      disabled: true,
    },
    {
      nameID: 'whiteBalance',
      label: 'WB',
      value: '',
      disabled: true,
    },
    {
      nameID: 'iso',
      label: 'ISO',
      value: '',
      disabled: true,
    },
    {
      nameID: 'expoComp',
      label: 'EV',
      value: 0,
      disabled: true,
    },
    {
      nameID: 'filter',
      label: 'Filter',
      value: '',
      disabled: true,
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
  //TOGGLE for checking disabled enable
  const toggleRecipe = (name, disabled) => {
    dispatch({
      type: TOGGLE_RECIPE,
      payload: {
        currentNameID: name,
        disabled: disabled,
      },
    });
  };
  //Toggle Checkbox
  const toggleCheckbox = (name, checkbox) => {
    dispatch({
      type: TOGGLE_CHECKBOX_RECIPE,
      payload: {
        currentNameID: name,
        checkbox: checkbox,
      },
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
        toggleCheckbox,
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
