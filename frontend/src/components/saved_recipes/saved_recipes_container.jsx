import { connect } from 'react-redux';
import SavedRecipesIndex from './saved_recipes_index';

const mapStateToProps = (state) => {
  // let savedRecipes = Object.values(state.entities.recipeSaves); //array of saved recipes

  return {
    // savedRecipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecipesIndex);