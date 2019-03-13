import React from 'react';
import RecipeResultsIndexItem from './recipe_results_index_item';
import './recipe_results.scss';
import Loading from '../loading/loading';
import RecipeResultsPlaceholder from './recipe_results_placeholder';
import RecipeSavesPlaceholder from '../saved_recipes/recipe_saves_placeholder';
import NoRecipesFound from './no_recipes_found';

class RecipeResultsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      justMounted: true
    };
    this.showNotification = this.showNotification.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  // componentDidMount() {
  //   if (this.props.fetch) {
  //     this.props.fetchRecipeSaves();
  //     this.setState({justMounted: false});
  //   };
  // }

  // componentDidUpdate(prevProps){
  //   if (prevProps !== this.props) {
  //     this.setState({justMounted: false});
  //   }
  // }
  showNotification () {
    document.getElementById("note").style.display = "block";
    setTimeout(function(){
      document.getElementById("note").style.display = "none";
    }, 2000);
  }

  handleClick (recipe) {
    this.props.handleRecipe(recipe);
    this.showNotification();
  }
  

  render() {
    let { recipes, handleRecipe, buttonText, loading, savesLoading, recipesFetched } = this.props;
    let recipeItems;

    if (Object.keys(recipes).length === 0 && buttonText==='Save' && !recipesFetched) {
      recipeItems = <RecipeResultsPlaceholder />;
    } else if (Object.keys(recipes).length === 0 && buttonText === 'Save') {
      recipeItems = <NoRecipesFound />;
    } else if (Object.keys(recipes).length === 0 && buttonText==='Remove') {
      recipeItems = <RecipeSavesPlaceholder />;
    } else {
      recipeItems = recipes.map( recipe => (
        <RecipeResultsIndexItem 
          key={recipe.linkUrl}
          recipe={recipe}
          handleRecipe={handleRecipe}
          buttonText={buttonText}
          handleClick={this.handleClick}
          showNotification={this.showNotification}
        />
      ));  
    }
    let content = loading || savesLoading ? <Loading /> : recipeItems
    

    return (
      <div id='recipe-results' className='recipes-main-container'>
        {content}
      </div>
    );
  }
}

export default RecipeResultsIndex;