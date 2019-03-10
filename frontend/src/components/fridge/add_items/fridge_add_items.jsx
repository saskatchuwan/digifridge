import React from 'react';
import '../fridge.scss';

import handle from '../../../images/icons/line.svg';

class FridgeAddItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postUserFood(this.state);
    this.setState({
      name: ''
    });
  }

  render() {

    return (
      <div className='fridge-add-items'>
        <img id='fridge-bottom-handle' src={handle} alt='no handle' />
        
        <div className='fridge-add-items-input-container'>
          <input
            className='add-item-input'
            placeholder='beets'
            onChange={this.update('name')}
            value={this.state.name}
            />

          <button 
            onClick={this.handleSubmit}>
            digifridge it!
          </button>

        </div>
      </div>
    );
  }
}

export default FridgeAddItems;