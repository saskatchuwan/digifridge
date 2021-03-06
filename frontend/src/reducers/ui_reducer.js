import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import RecipesLoadingReducer from './recipes_loading_reducer';
import RecipeSaveMsgReducer from './recipe_save_msg_reducer';
import SavesLoadingReducer from './saves_loading_reducer';

const UIReducer = combineReducers({
  recipesLoading: RecipesLoadingReducer,
  savesLoading: SavesLoadingReducer,
  modal: modalReducer,
  recipeSaveMsg: RecipeSaveMsgReducer,
});

export default UIReducer;
