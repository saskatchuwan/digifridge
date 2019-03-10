import React from 'react';
import RecipeResultsIndexItem from './recipe_results_index_item';
import './recipe_results.scss';

class RecipeResultsIndex extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {

    return (
      <div id='recipe-results' className='recipes-main-container'>
        {/* need to create list of fridge index items */}
        <RecipeResultsIndexItem />
      </div>
    );
  }
}

export default RecipeResultsIndex;