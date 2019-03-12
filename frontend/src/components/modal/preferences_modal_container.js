import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import PreferencesModal from './preferences_modal';

const mapStateToProps = (state) => {
  return {
    modal: 'preferences',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesModal);