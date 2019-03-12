import React from 'react';
import Toggle from 'react-toggle';

class PreferencesModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      peanutFree: true,
      dairyFree: true
    };
  }

  handleToggle(field) {
    return e => {
      this.setState({ [field]: !(this.state[field]) });
    };
  }

  render() {
    return (
      <div className="preferences-form">
        <h2>Have any dietary restrictions?</h2>
        <p>We'll filter your recipe results by the dietary restrictions you select below.</p>
        <form>
          <label>
            <Toggle
              className='toggle'
              defaultChecked={this.state.vegetarian}
              onChange={this.handleToggle("vegetarian")} />
            <span>Vegetarian</span>
          </label>

          <label>
            <Toggle
              className='toggle'
              defaultChecked={this.state.vegan}
              onChange={this.handleToggle("vegan")} />
            <span>Vegan</span>
          </label>

          <label>
            <Toggle
              className='toggle'
              defaultChecked={this.state.glutenFree}
              onChange={this.handleToggle("glutenFree")} />
            <span>Gluten-Free</span>
          </label>

          <label>
            <Toggle
              className='toggle'
              defaultChecked={this.state.peanutFree}
              onChange={this.handleToggle("peanutFree")} />
            <span>Peanut-Free</span>
          </label>

          <label>
            <Toggle
              className='toggle'
              defaultChecked={this.state.dairyFree}
              onChange={this.handleToggle("dairyFree")} />
            <span>Dairy-Free</span>
          </label>

          <input 
            type="submit" 
            value="Change preferences" 
            className="preferences-button"
          />
        </form>
      </div>
    )
  }
}

export default PreferencesModal;