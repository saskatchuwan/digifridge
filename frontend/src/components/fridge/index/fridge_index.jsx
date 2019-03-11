import React from 'react';
import FridgeIndexItem from './fridge_index_item';
import '../fridge.scss';
import _ from 'lodash';

class FridgeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFoods: [],
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount () {
    this.props.fetchUserFoods();
  }

  componentDidUpdate (prevProps) {
    // just to check that the local state is updating with the selected foods
    // console.log(this.state);
  }

  handleSelect (foodName) {
    this.props.receiveSelectedFood(foodName);

    let newSelectedFoods = this.state.selectedFoods.slice();
    newSelectedFoods.push(foodName);
    _.uniq(newSelectedFoods);

    this.setState({
      selectedFoods: _.uniq(newSelectedFoods)
    });
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
            handleSelect={this.handleSelect}
            selectedFoods={this.state.selectedFoods}
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