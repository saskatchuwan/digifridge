import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import PreferencesModal from './preferences_modal';
import { postPreferences } from '../../actions/preferences_actions';

const mapStateToProps = (state) => {
  return {
    modal: 'preferences',
    preferences: state.preferences,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    postPreferences: preferences => dispatch(postPreferences(preferences)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesModal);