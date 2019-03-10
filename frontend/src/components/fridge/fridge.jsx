import React from 'react';

import FridgeIndexContainer from './index/fridge_index_container';
import FridgeAddItemsContainer from './add_items/fridge_add_items_container';

class Fridge extends React.Component {
  render() {
    return (
      <div className='fridge-main-container'>
        <FridgeIndexContainer />
        <FridgeAddItemsContainer />
      </div>
    );
  }
}

export default Fridge;
