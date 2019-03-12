import React from 'react';
const RecipeResultsIndexItem = (props) => {
  let { recipe, handleRecipe, buttonText } = props;

  let healthLabelItems;

  if (buttonText === 'Save Recipe') {
    healthLabelItems = recipe.healthLabels.map(label => {
      return (
        <>
          {label}
          <br />
        </>
      )
    });
  } 

  return (
    <div className='recipe-result-container'>

      <a className='recipe-result-link'
        href={recipe.linkUrl}
        target="_blank">

          <div className='image-display-container'>
            <div className='image-display'>

                <div className='side'>
                  <img className='recipe-image' src={recipe.imgUrl} />
                </div>

                <div className="side back">
                  <br />
                  <strong>Nutritional Facts</strong>
                  <br />
                  <br />
                  Calories: {parseInt(recipe.calories)}
                  <br />
                  <br />
                  <br />
                  { healthLabelItems }
                </div>

            </div>
          </div>
        
        <br />
        <strong>{recipe.title}</strong>
      </a>


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

