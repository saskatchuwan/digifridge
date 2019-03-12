import React from 'react';
const RecipeResultsIndexItem = (props) => {
  let { recipe, handleRecipe, buttonText } = props;

  let healthLabelItems;

    healthLabelItems = recipe.healthLabels.map((label, idx) => {
      return (
        <div key={idx}>
          {label}
          <br />
        </div>
      )
    });

  return (
    <div className='recipe-result-container'>

      <a className='recipe-result-link'
        href={recipe.linkUrl}
        rel="noopener noreferrer"
        target="_blank">

          <div className='image-display-container'>
            <div className='image-display'>

                <div className='side'>
                  <img className='recipe-image' src={recipe.imgUrl} alt='no img'/>
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

