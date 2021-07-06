const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((request, response) => {
    User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((request, response) => {
    const username = request.body.username;
    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(404).json('Error ' + err));
});

module.exports = router;