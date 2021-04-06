import { UPDATE_RECIPE, TOGGLE_RECIPE, TOGGLE_RECIPE_STATE, DISCARD_RECIPE } from './RecipeActions';

const recipeReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_RECIPE:
      let list = state.recipe.map((item) => {
        if (item.nameID === action.payload.currentNameID) {
          return {
            ...item,
            value: action.payload.value,
          };
        }
        return item;
      });
      return { ...state, recipe: [...list] };

    case TOGGLE_RECIPE:
      const recipeList = state.recipe.map((item) => {
        if (item.nameID === action.payload.currentNameID) {
          return {
            ...item,
            disabled: !item.disabled,
          };
        }

        return item;
      });
      return { ...state, recipe: [...recipeList] };

    case TOGGLE_RECIPE_STATE:
      return { ...state, checkbox: !state.checkbox, button: !state.button };

    case DISCARD_RECIPE:
      return action.payload;

    default:
      return state;
  }
};

export default recipeReducer;
