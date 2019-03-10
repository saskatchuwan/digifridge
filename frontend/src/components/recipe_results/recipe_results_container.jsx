import { connect } from 'react-redux';
import RecipeResultsIndex from './recipe_results_index';

const mapStateToProps = (state) => {
  // let recipes = Object.values(state.entities.recipes); //array of recipes

  return {
    // recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeResultsIndex);