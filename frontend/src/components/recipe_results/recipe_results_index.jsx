import React from 'react';
import RecipeResultsIndexItem from './recipe_results_index_item';
import './recipe_results.scss';
import Loading from '../loading/loading';
import RecipeResultsPlaceholder from './recipe_results_placeholder';
import RecipeSavesPlaceholder from '../saved_recipes/recipe_saves_placeholder';

class RecipeResultsIndex extends React.Component {
  componentDidMount() {
    if (this.props.fetch) this.props.fetchRecipeSaves();
  }

  render() {
    let { recipes, handleRecipe, buttonText, loading } = this.props;
    let recipeItems;

    if (Object.keys(recipes).length === 0 && buttonText==='Save Recipe') {
      recipeItems = <RecipeResultsPlaceholder />;
    } else if (Object.keys(recipes).length === 0 && buttonText==='Remove') {
      recipeItems = <RecipeSavesPlaceholder />;
    } else {
      recipeItems = recipes.map( recipe => (
        <RecipeResultsIndexItem 
          key={recipe.linkUrl}
          recipe={recipe}
          handleRecipe={handleRecipe}
          buttonText={buttonText}
        />
      ));  
    }
    let content = loading ? <Loading /> : recipeItems

    return (
      <div id='recipe-results' className='recipes-main-container'>
        {content}
      </div>
    );
  }
}

export default RecipeResultsIndex;