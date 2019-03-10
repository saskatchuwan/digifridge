const Validator = require('validator');
const validText = require('./validText');

module.exports = function validateFoodInput(food) {
    let errors = {};

    food.name = validText(food.name) ? food.name : '';
    
    if (!Validator.isLength(food.name, {min: 2, max: 30})) {
        errors.handle = 'Food name must be between 2 and 30 characters'
    }
    if (Validator.isEmpty(food.name)) {
        errors.handle = 'Name of food is required';
    }
    return {
        errors, 
        isValid: Object.keys(errors).length===0
    };
};