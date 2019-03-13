import * as RecipeSaveApiUtil from '../util/recipe_saves_api_util';
export const RECEIVE_RECIPE_SAVES = 'RECEIVE_RECIPE_SAVES';
export const RECEIVE_RECIPE_SAVE = 'RECEIVE_RECEIPE_SAVE';
export const REMOVE_RECIPE_SAVE = 'REMOVE_RECIPE_SAVE';
export const SAVES_LOADING = 'SAVES_LOADING';

const savesLoading = () => ({
    type: SAVES_LOADING
});

const receiveRecipeSaves = recipes => ({
    type: RECEIVE_RECIPE_SAVES,
    recipes
});

const receiveRecipeSave = recipe => ({
    type: RECEIVE_RECIPE_SAVE,
    recipe
});

const removeRecipeSave = id => ({
    type: REMOVE_RECIPE_SAVE,
    id
});

export const fetchRecipeSaves = () => dispatch => {
    dispatch(savesLoading());
    RecipeSaveApiUtil.fetchSavedRecipes()
        .then(recipes => dispatch(receiveRecipeSaves(recipes.data)))
};

export const postRecipeSave = (recipe) => dispatch => (
    RecipeSaveApiUtil.postSavedRecipe(recipe)
        .then(recipe => dispatch(receiveRecipeSave(recipe.data)))
);

export const deleteRecipeSave = id => dispatch => (
    RecipeSaveApiUtil.removeSavedRecipe(id)
        .then(res => dispatch(removeRecipeSave(id)))
);