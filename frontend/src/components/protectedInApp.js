import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Fridge from './fridge/fridge';
import RecipeResultsContainer from './recipe_results/recipe_results_container';
import SavedRecipesContainer from './saved_recipes/saved_recipes_container';


const mapStateToProps = state => {
  return({
    recipeSaveMsg: state.ui.recipeSaveMsg,
  });
};


class ProtectedInApp extends React.Component {
  render() {
    return (
      <div className='main-in-app-component'>
        <div id="note">
            {this.props.recipeSaveMsg}
        </div>

        <ProtectedRoute path="/" component={Fridge} />
        <Switch>
          <ProtectedRoute path='/home' component={RecipeResultsContainer} />
          <ProtectedRoute path='/saved' component={SavedRecipesContainer} />
        </Switch>
      </div>
    );
  }
}


export default connect(mapStateToProps, null)(ProtectedInApp);
