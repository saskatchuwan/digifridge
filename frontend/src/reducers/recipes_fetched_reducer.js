import { RECIPES_FETCHED } from '../actions/recipes_actions';
import {RECIPES_NOT_FETCHED} from '../actions/session_actions';

const RecipesFetchedReducer = (state = false, action) => {
    switch (action.type) {
        case RECIPES_FETCHED:
            return true;
        case RECIPES_NOT_FETCHED:
            return false;
        default:
            return state;
    }
};

export default RecipesFetchedReducer;