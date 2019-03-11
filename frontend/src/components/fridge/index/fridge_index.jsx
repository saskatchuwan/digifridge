import React from 'react';
import FridgeIndexItem from './fridge_index_item';
import '../fridge.scss';

class FridgeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount () {
    this.props.fetchUserFoods();
  }

  handleRemove (foodId) {
    this.props.deleteUserFood(foodId);
    return e => {
      e.stopPropagation();
    };
  }

  render() {
    let { foods, deleteUserFood } = this.props;

    let foodItems;
    if (Object.keys(foods).length > 0) {
      foodItems = foods.map (food => {
        return (
          <FridgeIndexItem
            food={food}
            deleteUserFood={deleteUserFood}
            receiveSelectedFood={receiveSelectedFood}
            handleRemove={this.handleRemove}
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