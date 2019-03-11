import axios from 'axios';

// const food2ForkKey = require('../config/keys').food2ForkKey;

export const fetchRecipesEdamam = (queryTerms) => (
  axios.post('/api/recipeResults', { queryTerms } )
);

// export const fetchRecipesFood2Fork = (queryTerms) => (
//   axios({
//     method:'GET',
//     url:`https://www.food2fork.com/api/search?key=${food2ForkKey}&q=${queryTerms}`
//   })
// );

