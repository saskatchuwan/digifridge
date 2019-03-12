import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import FoodsReducer from './foods_reducer';
import RecipesReducer from './recipes_reducer';
import RecipeSavesReducer from './recipe_saves_reducer';
import SelectedFoodsReducer from './selected_foods_reducer';
import { uiReducer } from './ui_reducer';


const RootReducer = combineReducers({
  foods: FoodsReducer,
  selectedFoods: SelectedFoodsReducer,
  recipes: RecipesReducer,
  recipeSaves: RecipeSavesReducer,
  errors: ErrorsReducer,
  session: SessionReducer,
  ui: uiReducer,
});

export default RootReducer;