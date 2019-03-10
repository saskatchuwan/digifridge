import React from 'react';
import SavedRecipesIndexItem from './saved_recipes_index_item';
import './saved_recipes.scss';

class SavedRecipesIndex extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {

    return (
      <div id='saved-recipes' className='recipes-main-container'>
        {/* need to create list of saved recipe index items */}
        <SavedRecipesIndexItem />
      </div>
    );
  }
}

export default SavedRecipesIndex;