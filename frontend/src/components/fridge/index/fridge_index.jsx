import React from 'react';
import FridgeIndexItem from './fridge_index_item';
import '../fridge.scss';

class FridgeIndex extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {

    return (
      <div className='fridge-index-main-container'>
        {/* need to create list of fridge index items */}
        <ul className='fridge-index-ul'>
          <FridgeIndexItem />
          <FridgeIndexItem />
          <FridgeIndexItem />
          <FridgeIndexItem />
        </ul>
      </div>
    );
  }
}

export default FridgeIndex;