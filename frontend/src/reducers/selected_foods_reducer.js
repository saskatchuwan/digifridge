import { RECEIVE_SELECTED_FOOD } from '../actions/selected_food_actions';

const SelectedFoodsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = state.slice();

  switch(action.type) {
    case RECEIVE_SELECTED_FOOD:
      newState.push(action.food);
      return newState;
    default:
      return state;
  }
};

export default SelectedFoodsReducer;