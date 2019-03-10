import * as FoodApiUtil from '../util/foods_api_util';
export const RECEIVE_USER_FOODS = 'RECEIVE_USER_FOODS';
export const RECEIVE_USER_FOOD = 'RECEIVE_USER_FOOD';
export const REMOVE_USER_FOOD = 'REMOVE_USER_FOOD';

const receiveUserFoods = (foods) => ({
    type: RECEIVE_USER_FOODS,
    foods
});

const receiveUserFood = food => ({
    type: RECEIVE_USER_FOOD,
    food
});

const removeUserFood = id => ({
    type: REMOVE_USER_FOOD,
    id
});

export const fetchUserFoods = () => dispatch => (
    FoodApiUtil.fetchFoods()
        .then(foods => dispatch(receiveUserFoods(foods.data)))
);

export const postUserFood = (food) => dispatch => (
    FoodApiUtil.postFood(food)
        .then(food => dispatch(receiveUserFood(food.data)))
);

export const deleteUserFood = id => dispatch => (
    FoodApiUtil.removeFood(id)
        .then(res => dispatch(removeUserFood(id)))
);
