const Validator = require('validator');
const validText = require('./validText');

module.exports = function validateRecipeInput(recipe) {
    let errors = {};

    recipe.title = validText(recipe.title) ? recipe.title : '';
    recipe.linkUrl = validText(recipe.linkUrl) ? recipe.linkUrl : '';
    recipe.imgUrl = validText(recipe.imgUrl) ? recipe.imgUrl : '';
    recipe.description = validText(recipe.description) ? recipe.description : '';
    recipe.source = validText(recipe.source) ? recipe.source : '';

    if (!Validator.isLength(recipe.title, { min: 2, max: 280 })) {
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
    if (!Validator.isLength(recipe.description, {max: 280})) {
        errors.handle = 'Description must be 280 characters or less';
    } 
    if (!Validator.isLength(recipe.source, {min: 1, max: 100})) {
        errors.handle = 'Source must be between 1 and 100 characters';
    }
    
    
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};