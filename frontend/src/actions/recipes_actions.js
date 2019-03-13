import * as RecipeApiUtil from '../util/recipes_api_util';
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECIPES_LOADING = 'RECIPES_LOADING';

const recipesLoading = () => ({
  type: RECIPES_LOADING
});

export const fetchRecipes = (queryTerms, preferencesStr) => dispatch => {
  console.log("preferencesStr", preferencesStr);
  dispatch(recipesLoading());
  RecipeApiUtil.fetchRecipesEdamam(queryTerms, preferencesStr)
    .then(recipes => dispatch(receiveRecipes(recipes.data.hits)));
};

const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  recipes
});

 