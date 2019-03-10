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
    let { foods } = this.props;

    let foodItems;
    if (Object.keys(foods).length > 0) {
      foodItems = foods.map (food => {
        return (
          <FridgeIndexItem
            food={food}
          />
        );
      });
    }

    return (
      <div className='fridge-index-main-container'>
        <ul className='fridge-index-ul'>
          {foodItems}
        </ul>
      </div>
    );
  }
}

export default FridgeIndex;