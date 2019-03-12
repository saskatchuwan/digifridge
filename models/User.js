const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    health: {
        type: Object,
        default: {
            vegan: {
                name: 'vegan',
                preferred: false
            },
            vegetarian: {
                name: 'vegetarian',
                preferred: false
            },
            glutenFree: {
                name: 'gluten-free',
                preferred: false
            },
            dairyFree: {
                name: 'dairy-free',
                preferred: false
            },
            peanutFree: {
                name: 'peanut-free',
                preferred: false
            },
        }
    }
});

module.exports = User = mongoose.model('users', UserSchema);