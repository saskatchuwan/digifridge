import React from 'react';
const RecipeResultsIndexItem = (props) => {
  let { recipe, handleRecipe, buttonText } = props;
  // recipe.healthLabels (array)
  return (
    <div className='recipe-result-container'>

      <a className='recipe-result-link'
        href={recipe.linkUrl}
        target="_blank">

        <img src={recipe.imgUrl} />
        <br />
        {recipe.title}
      </a>

      {/* <span>{recipe.calories}</span> */}

      <div className='sub-info'>
        <div className='recipe-source'>Source: {recipe.source}</div>

        <button
          onClick={() => handleRecipe(recipe)}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default RecipeResultsIndexItem;

