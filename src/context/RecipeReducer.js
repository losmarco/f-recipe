import { UPDATE_RECIPE, TOGGLE_RECIPE, RESET_RECIPE } from './RecipeActions';

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
    case RESET_RECIPE:
      return action.payload;

    default:
      return state;
  }
};

export default recipeReducer;
