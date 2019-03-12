import { connect } from 'react-redux';
// import SavedRecipesIndex from './saved_recipes_index';
import { readableRecipeSaves } from '../../reducers/recipes_selector';
import { fetchRecipeSaves, deleteRecipeSave } from '../../actions/recipe_saves_actions';
import RecipeResultsIndex from '../recipe_results/recipe_results_index';

const mapStateToProps = (state) => {

  return {
    recipes: readableRecipeSaves(state),
    buttonText: "Remove",
    fetch: true,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRecipe: recipe => dispatch(deleteRecipeSave(recipe._id)),
    fetchRecipeSaves: () => dispatch(fetchRecipeSaves()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeResultsIndex);