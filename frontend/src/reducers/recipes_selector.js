export const readableRecipes = (state) => {
  return state.recipes.map( recipeObj => {
    let title = recipeObj.recipe.label;
    let linkUrl = recipeObj.recipe.url;
    let imageUrl = recipeObj.recipe.image;
    let source = recipeObj.recipe.source;

    return { title, linkUrl, imageUrl, source };
  });
};