export const RECEIVE_SELECTED_FOOD = 'RECEIVE_SELECTED_FOOD';
export const REMOVE_SELECTED_FOOD = 'REMOVE_SELECTED_FOOD';

export const receiveSelectedFood = (food) => ({
  type: RECEIVE_SELECTED_FOOD,
  food
});

export const removeSelectedFood = (food) => ({
  type: REMOVE_SELECTED_FOOD,
  food
});