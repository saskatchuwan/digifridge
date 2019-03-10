const Validator = require('validator');
const validText = require('./validText');

module.exports = function validateRecipeInput(recipe) {
    let errors = {};

    recipe.title = validText(recipe.title) ? recipe.title : '';
    recipe.linkUrl = validText(recipe.linkUrl) ? recipe.linkUrl : '';
    recipe.imgUrl = validText(recipe.imgUrl) ? recipe.imgUrl : '';

    if (!Validator.isLength(recipe.title, { min: 2, max: 30 })) {
        errors.handle = 'Food name must be between 2 and 30 characters'
    }
    if (Validator.isEmpty(recipe.title)) {
        errors.handle = 'Name of food is required';
    }
    if (!Validator.isLength(recipe.linkUrl, {min: 5})) {
        errors.handle = 'Must be valid url';
    }
    if (Validator.isEmpty(recipe.linkUrl)) {
        errors.handle = 'Link to recipe is required';
    }
    
    
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};