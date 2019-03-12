export const readableRecipes = (state) => {
  return state.recipes.map( recipeObj => {
    let title = recipeObj.recipe.label;
    let linkUrl = recipeObj.recipe.url;
    let imgUrl = recipeObj.recipe.image;
    let source = recipeObj.recipe.source;

    return { title, linkUrl, imgUrl, source };
  });
};

export const readableRecipeSaves = (state) => {
  return Object.values(state.recipeSaves);
}