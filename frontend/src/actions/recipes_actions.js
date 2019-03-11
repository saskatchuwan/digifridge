import * as RecipeApiUtil from '../util/recipes_api_util';
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';

export const fetchRecipes = (queryTerms) => dispatch => (
  RecipeApiUtil.fetchRecipesEdamam(queryTerms)
    .then(recipes => dispatch(receiveRecipes(recipes.data.hits)))
);

const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  recipes
});