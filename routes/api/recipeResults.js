const express = require('express');
const router = express.Router();
const passport = require('passport');
const edamamAppId = require('../../config/keys').edamamAppId;
const edamamAppSecret = require('../../config/keys').edamamAppSecret;
const axios = require('axios');

router.post('/', (req, res) => {
  const queryTerms = req.body.queryTerms;

  axios({
    method: 'GET',
    url: `https://api.edamam.com/search?app_id=${edamamAppId}&app_key=${edamamAppSecret}&q=${queryTerms}`
  }).then( recipes => res.json(recipes.data));
});

module.exports = router;