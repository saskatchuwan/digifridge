import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import RecipesLoadingReducer from './recipes_loading_reducer';

const UIReducer = combineReducers({
  recipesLoading: RecipesLoadingReducer,
  modal: modalReducer,
});

export default UIReducer;
