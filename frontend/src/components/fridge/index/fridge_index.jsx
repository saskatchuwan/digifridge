import React from 'react';
import FridgeIndexItem from './fridge_index_item';

class FridgeIndex extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {

    return (
      <div className='fridge-index-main-container'>
        {/* need to create list of fridge index items */}
        <FridgeIndexItem />
      </div>
    );
  }
}

export default FridgeIndex;