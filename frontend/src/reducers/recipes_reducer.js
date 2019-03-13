import { RECEIVE_RECIPES } from "../actions/recipes_actions";
import {CLEAR_RECIPES} from '../actions/session_actions';

const RecipesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RECIPES:
      return action.recipes;
    case CLEAR_RECIPES:
      return [];
    default:
      return state;
  }
};

export default RecipesReducer;