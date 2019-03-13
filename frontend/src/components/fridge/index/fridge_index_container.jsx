import { connect } from 'react-redux';
import FridgeIndex from './fridge_index';
import { fetchUserFoods, deleteUserFood } from '../../../actions/food_actions';
import { receiveSelectedFood, removeSelectedFood } from  '../../../actions/selected_food_actions';
import { fetchRecipes } from '../../../actions/recipes_actions';
import { fetchPreferences } from '../../../actions/preferences_actions';
import { stringifyPreferences } from '../../../reducers/preferences_selector';

const mapStateToProps = (state) => {
  let foods = Object.values(state.foods); //array of foods
  let selectedFoods = Object.values(state.selectedFoods);
  let preferencesStr = stringifyPreferences(state);

  return {
    foods,
    selectedFoods,
    preferencesStr
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserFoods: () => dispatch(fetchUserFoods()),
    deleteUserFood: (id) => dispatch(deleteUserFood(id)),
    receiveSelectedFood: (food) => dispatch(receiveSelectedFood(food)),
    removeSelectedFood: (food) => dispatch(removeSelectedFood(food)),
    fetchRecipes: (queryTerms, preferencesStr) => dispatch(fetchRecipes(queryTerms, preferencesStr)),
    fetchPreferences: () => dispatch(fetchPreferences()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FridgeIndex);