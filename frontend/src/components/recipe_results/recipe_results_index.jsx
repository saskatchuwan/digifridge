import React from 'react';
import RecipeResultsIndexItem from './recipe_results_index_item';
import './recipe_results.scss';

class RecipeResultsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.fetch) this.props.fetchRecipeSaves();
  }

  render() {
    let { recipes, handleRecipe, buttonText } = this.props;
    let recipeItems = recipes.map( recipe => (
      <RecipeResultsIndexItem 
        key={recipe.linkUrl}
        recipe={recipe}
        handleRecipe={handleRecipe}
        buttonText={buttonText}
      />
    ));

    return (
      <div id='recipe-results' className='recipes-main-container'>
        {recipeItems}
      </div>
    );
  }
}

export default RecipeResultsIndex;