const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserRecipeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    linkUrl: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    source: {
        type: String,
        require: false
    }
});
UserRecipeSchema.index({
    user: 1,
    linkUrl: 1,
}, {
        unique: true,
    });



module.exports = UserRecipe = mongoose.model('userRecipes', UserRecipeSchema);