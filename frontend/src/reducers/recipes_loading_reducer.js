import { RECIPES_LOADING } from '../actions/recipes_actions';

const RecipesLoadingReducer = (state=false, action) => {
    switch(action.type) {
        case RECIPES_LOADING:
            return true;
        default:
            return false;
    }
};

export default RecipesLoadingReducer;