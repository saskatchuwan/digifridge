import axios from 'axios';

export const fetchPreferences = () => (
  axios.get(`/api/users/preferences`)
);

export const postPreferences = preferences => (
  axios.post('/api/users/preferences', { health: preferences })
);