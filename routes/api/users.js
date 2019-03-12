const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../../models/User');
// const User = mongoose.model('user', userSchema);

const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const passport = require('passport');
const db = require('../../config/keys').mongoURI;



// router.get("/test", (req, res) => res.json({ msg: "This is the users test route" }));
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ name: req.body.name }).then(user => {
        if (user) {
            errors.name = "User already exists";
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = { id: user.id, name: user.name };

                            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            });
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});


router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ email: 'This user does not exist' });
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = { id: user.id, name: user.name };

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            // Tell the key to expire in one hour
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            });
                    } else {
                        return res.status(400).json({ password: 'Incorrect password' });
                    }
                })
        })
})
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        // health: req.user.health
    });
});
router.get('/preferences', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        health: req.user.health
        // health: req.user.health
    });
});

router.post('/preferences', passport.authenticate('jwt', { session: false }), (req, res) => {
 
    User.findById(
        
        req.user.id, function (err, user) {
        if (err) {
            console.log('error');
        } else {
            if (user) {
                const health = req.user.health;
                const preferences = req.body.health.split(',');

                preferences.forEach(healthString => {
                    let healthItem = healthString.split(' ');
                    let healthType = healthItem[0];
                    let bool = healthItem[1];
                    health[healthType].preferred = bool;
                    user.health = health;
                });
                
                user.health = health;
                user.save(function (err, updatedUser) {
                    if (err) throw (err);

                    res.status(200).send(updatedUser);
                });
            } else {
                res.status(200).send('not saved');
            }
        }
    });
});



module.exports = router;