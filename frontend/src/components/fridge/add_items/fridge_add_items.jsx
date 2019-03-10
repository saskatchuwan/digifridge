import React from 'react';
import '../fridge.scss';

class FridgeAddItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='fridge-add-items'>
        <div className='fridge-add-items-input-container'>
          <input
            className='add-item-input'
            placeholder='beets'
            />

          <button>digifridge it!</button>

        </div>
      </div>
    );
  }
}

export default FridgeAddItems;