import React from 'react';
import FridgeIndexItem from './fridge_index_item';
import '../fridge.scss';

class FridgeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchUserFoods();
  }


  render() {
    let { foods, deleteUserFood, receiveSelectedFood } = this.props;

    let foodItems;
    if (Object.keys(foods).length > 0) {
      foodItems = foods.map (food => {
        return (
          <FridgeIndexItem
            food={food}
            deleteUserFood={deleteUserFood}
            receiveSelectedFood={receiveSelectedFood}
          />
        );
      });
    }

    return (
      <div className='fridge-index-main-container'>
        <div className='fridge-index'>
          {foodItems}
        </div>
      </div>
    );
  }
}

export default FridgeIndex;