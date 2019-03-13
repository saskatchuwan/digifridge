import React from 'react';
import FridgeIndexItem from './fridge_index_item';
import '../fridge.scss';
import _ from 'lodash';
import {withRouter, Redirect} from 'react-router-dom';


class FridgeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFoods: [],
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleFetchRecipes = this.handleFetchRecipes.bind(this);
  }

  componentDidMount () {
    this.props.fetchUserFoods();
    this.props.fetchPreferences();
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


  handleDeselect (foodName) {
    this.props.removeSelectedFood(foodName);

    let newSelectedFoods = this.state.selectedFoods.slice();

    this.setState({
      selectedFoods: newSelectedFoods.filter(food => food !== foodName)
    });
  }

  handleRemove(food) {
    this.props.deleteUserFood(food._id);
    this.handleDeselect(food.name);
  }

  handleFetchRecipes() {
    let queryTerms = this.state.selectedFoods.join(",");
    this.props.fetchRecipes(queryTerms, this.props.preferencesStr);

    if (this.props.location.pathname.includes('saved')) {
      this.props.history.push('/home');
    }
  }


  render() {
    let { foods } = this.props;

    let foodItems;
    if (Object.keys(foods).length > 0) {
      foodItems = foods.reverse().map (food => {
        return (
          <FridgeIndexItem
            key={food._id}
            food={food}
            handleSelect={this.handleSelect}
            handleDeselect={this.handleDeselect}
            selectedFoods={this.state.selectedFoods}
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

        <button
          className='get-recipe-results-button'
          onClick={this.handleFetchRecipes}
        >
          GET RECIPES
        </button>
      </div>
    );
  }
}

export default withRouter(FridgeIndex);