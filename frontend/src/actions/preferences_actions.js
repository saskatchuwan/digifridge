import * as PreferencesApiUtil from '../util/preferences_api_util';

export const RECEIVE_PREFERENCES = 'RECEIVE_PREFERENCES';

const receivePreferences = preferences => ({
  type: RECEIVE_PREFERENCES,
  preferences
});

export const fetchPreferences = () => dispatch => (
  PreferencesApiUtil.fetchPreferences()
    .then(preferences => dispatch(receivePreferences(preferences.data.health)))
);

export const postPreferences = preferences => dispatch => (
  PreferencesApiUtil.postPreferences(preferences)
    .then(preferences => dispatch(receivePreferences(preferences.data.health)))
);