import _ from 'lodash';
import {RECEIVE_USER_FOODS, RECEIVE_USER_FOOD, REMOVE_USER_FOOD} from '../actions/food_actions';

const FoodsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_FOODS:
      let foodObject = {};
      action.foods.forEach(food => foodObject[food._id] = food);
     return  _.merge({}, state, foodObject);

    case RECEIVE_USER_FOOD:
      return _.merge({}, state, {[action.food._id]:action.food});

    case REMOVE_USER_FOOD:
      let newState = _.merge({}, state);
      delete newState[action.id];
      return newState;

    default:
      return state;
  }
};

export default FoodsReducer;