import { connect } from 'react-redux';
import FridgeAddItems from './fridge_add_items';
import { postUserFood } from '../../../actions/food_actions';


const mapDispatchToProps = (dispatch) => {
  return {
    postUserFood: (food) => dispatch(postUserFood(food)),
  };
};

export default connect(null, mapDispatchToProps)(FridgeAddItems);