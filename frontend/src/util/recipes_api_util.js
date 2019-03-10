import axios from 'axios';

const edamamAppId = require('../config/keys').edamamAppId;
const edamamAppSecret = require('../config/keys').edamamAppSecret;
const food2ForkKey = require('../config/keys').food2ForkKey;

export const fetchRecipesEdamam = (queryTerms) => (
  axios({
    method:'GET',
    url:`https://api.edamam.com/search?app_id=${edamamAppId}&app_key=${edamamAppSecret}&q=${queryTerms}`
  })
);
export const fetchRecipesFood2Fork = (queryTerms) => (
  axios({
    method:'GET',
    url:`https://www.food2fork.com/api/search?key=${food2ForkKey}&q=${queryTerms}`
  })
);

