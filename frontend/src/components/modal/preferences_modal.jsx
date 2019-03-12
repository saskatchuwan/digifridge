import React from 'react';
import Toggle from 'react-toggle';

class PreferencesModal extends React.Component {
  constructor(props) {
    super(props);

    let { vegan, vegetarian, glutenFree, peanutFree, dairyFree } = this.props.preferences;

    this.state = {
      vegan: vegan.preferred == "true",
      vegetarian: vegetarian.preferred == "true",
      glutenFree: glutenFree.preferred == "true",
      peanutFree: peanutFree.preferred == "true",
      dairyFree: dairyFree.preferred == "true"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggle(field) {
    return e => {
      this.setState({ [field]: !(this.state[field]) });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    let toString = Object.keys(this.state).map( key => (
      `${key} ${this.state[key]}`
    ));
    
    this.props.postPreferences(toString.join(","));
  }

  render() {
    return (
      <div className="preferences-form">
        <h2 className='modal-title'>Have any dietary restrictions?</h2>
        <p>We'll filter your recipe results by the dietary restrictions you select below.</p>
        <form onSubmit={this.handleSubmit}>
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