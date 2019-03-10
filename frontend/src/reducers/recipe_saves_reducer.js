import _ from 'lodash';
import {RECEIVE_RECIPE_SAVES, 
        RECEIVE_RECIPE_SAVE, 
        REMOVE_RECIPE_SAVE} from '../actions/recipe_saves_actions';

const RecipeSavesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RECIPE_SAVES:
      let recipeObject = {};
      action.recipes.forEach(recipe => recipeObject[recipe._id] = recipe);
      return _.merge({}, state, recipeObject);
    case RECEIVE_RECIPE_SAVE:
      return _.merge({}, state, {[action.recipe._id]: action.recipe});
    case REMOVE_RECIPE_SAVE:
      let newState = _.merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default RecipeSavesReducer;