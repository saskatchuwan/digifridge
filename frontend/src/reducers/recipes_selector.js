export const readableRecipes = (state) => {
  return state.recipes.map( recipeObj => {
    let title = recipeObj.recipe.label;
    let linkUrl = recipeObj.recipe.url;
    let imgUrl = recipeObj.recipe.image;
    let source = recipeObj.recipe.source;
    let calories = recipeObj.recipe.calories;
    let healthLabels = recipeObj.recipe.healthLabels;
    let totalTime = recipeObj.recipe.totalTime;

    return { title, linkUrl, imgUrl, source, calories, healthLabels, totalTime };
  });
};

export const readableRecipeSaves = (state) => {
  return Object.values(state.recipeSaves);
}