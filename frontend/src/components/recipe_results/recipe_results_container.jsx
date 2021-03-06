import { connect } from 'react-redux';
import RecipeResultsIndex from './recipe_results_index';
import { readableRecipes } from '../../reducers/recipes_selector';
import { postRecipeSave } from '../../actions/recipe_saves_actions';

const mapStateToProps = (state) => {

  return {
    recipes: readableRecipes(state),
    buttonText: "Save",
    fetch: false, 
    loading: state.ui.recipesLoading,
    savesLoading: state.ui.savesLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRecipe: recipe => dispatch(postRecipeSave(recipe)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeResultsIndex);