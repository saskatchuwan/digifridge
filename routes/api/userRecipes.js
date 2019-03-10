const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const UserRecipe = require('../../models/UserRecipe');
const validateRecipeInput = require('../../validation/userRecipes');

router.get('/user/:user_id', (req, res) => {
    UserRecipe.find({user: req.params.user_id})
        .then(userRecipes => res.json(userRecipes))
        .catch(err => 
            res.status(404).json({noRecipesFound: 'No recipes found for this user'}
            )
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateRecipeInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newRecipe = new UserRecipe({
            title: req.body.title,
            linkUrl: req.body.linkUrl,
            imgUrl: req.body.imgUrl,
            user: req.user.id
        });

        newRecipe.save().then(recipe => res.json(recipe));
    }
);

router.delete('/:user_recipe_id', 
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        const _id = req.params.user_recipe_id;
        UserRecipe.findOneAndRemove({ _id })
            .then(() => res.json({ success: true }));
    }
);
module.exports = router;