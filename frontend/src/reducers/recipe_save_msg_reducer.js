import { RECEIVE_RECIPE_SAVE, 
          REMOVE_RECIPE_SAVE } from '../actions/recipe_saves_actions';

const RecipeSaveMsgReducer = (state="", action) => {
    switch(action.type) {
        case RECEIVE_RECIPE_SAVE:
            return "Successfully saved your recipe!";
        case REMOVE_RECIPE_SAVE:
            return "Removed from saved recipes.";
        default:
            return "";
    }
};

export default RecipeSaveMsgReducer;