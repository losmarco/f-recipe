import { UPDATE_RECIPE, TOGGLE_RECIPE } from './RecipeActions';
// import produce from 'immer';
const recipeReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_RECIPE:
      return state.map((item, index) => {
        if (item.nameID === action.payload.currentNameID) {
          return {
            ...item,
            value: action.payload.value,
          };
        }
        return item;
      });

    case TOGGLE_RECIPE:
      return {};
    default:
      return state;
  }
};

export default recipeReducer;
