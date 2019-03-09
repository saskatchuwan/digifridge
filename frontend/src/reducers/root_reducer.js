import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import foodsReducer from './foods_reducer';
import recipesReducer from './recipes_reducer';
import recipeSavesReducer from './recipe_saves_reducer';


const rootReducer = combineReducers({
  foods: foodsReducer,
  recipes: recipesReducer,
  recipeSaves: recipeSavesReducer,
  errors: errorsReducer,
  session: sessionReducer,
});

export default rootReducer;