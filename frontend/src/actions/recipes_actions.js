import * as RecipeApiUtil from '../util/recipes_api_util';
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECIPES_LOADING = 'RECIPES_LOADING';
export const RECIPES_FETCHED = 'RECIPES_FETCHED';


const recipesLoading = () => ({
  type: RECIPES_LOADING
});

const recipesFetched = () => ({
  type: RECIPES_FETCHED
});

export const fetchRecipes = (queryTerms, preferencesStr) => dispatch => {
  dispatch(recipesLoading());
  RecipeApiUtil.fetchRecipesEdamam(queryTerms, preferencesStr)
  .then(recipes => dispatch(receiveRecipes(recipes.data.hits)));
  dispatch(recipesFetched());
};

const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  recipes
});

 