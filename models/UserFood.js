const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserFoodSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    expirationDate: {
        type: Date,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('userFoods', UserFoodSchema);