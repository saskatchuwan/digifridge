import React from 'react';
import '../fridge.scss';


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
        
        <div className='fridge-add-items-input-container'>
          <input
            className='add-item-input'
            placeholder='beets'
            spellCheck='true'
            onChange={this.update('name')}
            value={this.state.name}
            />

          <button 
            onClick={this.handleSubmit}>
            DIGIFRIDGE IT
          </button>

        </div>
        
      </div>
    );
  }
}

export default FridgeAddItems;