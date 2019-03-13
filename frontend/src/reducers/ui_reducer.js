import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import RecipesLoadingReducer from './recipes_loading_reducer';
import RecipeSaveMsgReducer from './recipe_save_msg_reducer';

const UIReducer = combineReducers({
  recipesLoading: RecipesLoadingReducer,
  modal: modalReducer,
  recipeSaveMsg: RecipeSaveMsgReducer,
});

export default UIReducer;
