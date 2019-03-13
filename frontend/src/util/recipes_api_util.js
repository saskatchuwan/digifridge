import axios from 'axios';

// const food2ForkKey = require('../config/keys').food2ForkKey;

export const fetchRecipesEdamam = (queryTerms, preferencesStr) => (
  axios.post('/api/recipeResults', { queryTerms, preferencesStr } )
);

// export const fetchRecipesFood2Fork = (queryTerms) => (
//   axios({
//     method:'GET',
//     url:`https://www.food2fork.com/api/search?key=${food2ForkKey}&q=${queryTerms}`
//   })
// );

