import React from 'react';
import RecipeResultsIndexItem from './recipe_results_index_item';
import './recipe_results.scss';
import Loading from '../loading/loading';

class RecipeResultsIndex extends React.Component {
  componentDidMount() {
    if (this.props.fetch) this.props.fetchRecipeSaves();
  }

  render() {
    let { recipes, handleRecipe, buttonText, loading } = this.props;
    let recipeItems = recipes.map( recipe => (
      <RecipeResultsIndexItem 
        key={recipe.linkUrl}
        recipe={recipe}
        handleRecipe={handleRecipe}
        buttonText={buttonText}
      />
    ));
    let content = loading ? <Loading /> : recipeItems

    return (
      <div id='recipe-results' className='recipes-main-container'>
        {content}
      </div>
    );
  }
}

export default RecipeResultsIndex;