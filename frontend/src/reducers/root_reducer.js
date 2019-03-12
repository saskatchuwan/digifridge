import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import FoodsReducer from './foods_reducer';
import RecipesReducer from './recipes_reducer';
import RecipeSavesReducer from './recipe_saves_reducer';
import SelectedFoodsReducer from './selected_foods_reducer';
import UIReducer from './ui_reducer';
import preferencesReducer from './preferences_reducer';


const RootReducer = combineReducers({
  foods: FoodsReducer,
  selectedFoods: SelectedFoodsReducer,
  recipes: RecipesReducer,
  recipeSaves: RecipeSavesReducer,
  errors: ErrorsReducer,
  session: SessionReducer,
  ui: UIReducer,
  preferences: preferencesReducer,
});

export default RootReducer;