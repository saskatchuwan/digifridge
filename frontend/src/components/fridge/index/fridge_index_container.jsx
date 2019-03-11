import { connect } from 'react-redux';
import FridgeIndex from './fridge_index';
import { fetchUserFoods, deleteUserFood } from '../../../actions/food_actions';
import { receiveSelectedFood } from  '../../../actions/selected_food_actions';

const mapStateToProps = (state) => {
  let foods = Object.values(state.foods); //array of foods

  return {
    foods,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserFoods: () => dispatch(fetchUserFoods()),
    deleteUserFood: (id) => dispatch(deleteUserFood(id)),
    receiveSelectedFood: (food) => dispatch(receiveSelectedFood(food)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FridgeIndex);