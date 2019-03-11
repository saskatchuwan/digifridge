export const RECEIVE_SELECTED_FOOD = 'RECEIVE_SELECTED_FOOD';

export const receiveSelectedFood = (food) => ({
  type: RECEIVE_SELECTED_FOOD,
  food
});