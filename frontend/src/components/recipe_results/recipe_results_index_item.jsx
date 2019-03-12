import React from 'react';

const RecipeResultsIndexItem = (props) => {
  let { recipe, handleRecipe, buttonText } = props;

  return (
    <div>
      <img src={recipe.imgUrl} />
      <a href={recipe.linkUrl}>{recipe.title}</a>
      <div>Thanks to {recipe.source} for this recipe</div>
      <button onClick={() => handleRecipe(recipe)}>
        {buttonText}
      </button>
    </div>
  );
}

export default RecipeResultsIndexItem;

