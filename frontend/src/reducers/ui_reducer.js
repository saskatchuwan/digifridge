import { combineReducers } from 'redux';
import RecipesLoadingReducer from './recipes_loading_reducer';

const UIReducer = combineReducers({
    recipesLoading: RecipesLoadingReducer
});

export default UIReducer;