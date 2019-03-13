import { RECEIVE_PREFERENCES } from '../actions/preferences_actions';

const preferencesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PREFERENCES:
      return action.preferences;
    default:
      return state;
  }
};

export default preferencesReducer;