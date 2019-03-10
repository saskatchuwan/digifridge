import React from 'react';
import '../fridge.scss';

class FridgeAddItems extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {

    return (
      <div className='fridge-add-items'>
        add items
        {/* will be an input to get user entry of food */}
        {/* might decide to throw the container away and have this be render on top of existing food items */}
      </div>
    );
  }
}

export default FridgeAddItems;