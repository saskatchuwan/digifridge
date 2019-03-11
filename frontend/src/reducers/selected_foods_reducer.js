import { RECEIVE_SELECTED_FOOD,
          REMOVE_SELECTED_FOOD } from '../actions/selected_food_actions';
import _ from 'lodash';

//need to make array unique

const SelectedFoodsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = state.slice();

  switch(action.type) {
    case RECEIVE_SELECTED_FOOD:
      newState.push(action.food);
      return _.uniq(newState);
    case REMOVE_SELECTED_FOOD:
      return newState.filter(food => food !== action.food);
    default:
      return state;
  }
};

export default SelectedFoodsReducer;