const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const UserRecipe = require('../../models/UserRecipe');
const validateRecipeInput = require('../../validation/userRecipes');

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    UserRecipe.find({user: req.user.id})
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
            user: req.user.id,
            description: req.body.description,
            source: req.body.source,
            calories: req.body.calories,
            healthLabels: req.body.healthLabels
        });

        newRecipe.save().then(recipe => res.json(recipe))
                        .catch(err => res.status(422).json({uniqueness: 'You have already saved this recipe'}));
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