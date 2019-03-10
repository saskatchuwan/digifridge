import { connect } from 'react-redux';
import FridgeIndex from './fridge_index';

const mapStateToProps = (state) => {
  // let foods = Object.values(state.entities.foods); //array of foods

  return {
    // foods,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // since users are able to add on to this list of foods, need to map fetchFood
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FridgeIndex);