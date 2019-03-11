import { connect } from 'react-redux';
import FridgeIndex from './fridge_index';
import { fetchUserFoods, deleteUserFood } from '../../../actions/food_actions';
import { receiveSelectedFood, removeSelectedFood } from  '../../../actions/selected_food_actions';
import { fetchRecipes } from '../../../actions/recipes_actions';

const mapStateToProps = (state) => {
  let foods = Object.values(state.foods); //array of foods
  let selectedFoods = Object.values(state.selectedFoods);

  return {
    foods,
    selectedFoods,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserFoods: () => dispatch(fetchUserFoods()),
    deleteUserFood: (id) => dispatch(deleteUserFood(id)),
    receiveSelectedFood: (food) => dispatch(receiveSelectedFood(food)),
    removeSelectedFood: (food) => dispatch(removeSelectedFood(food)),
    fetchRecipes: (queryTerms) => dispatch(fetchRecipes(queryTerms)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FridgeIndex);