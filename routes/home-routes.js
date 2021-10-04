const router = require('express').Router();
const Post = require('../models/post');
const User = require('../models/user');


// get landing page
router.get('/', async (req, res) => {
    try {
         res.render('home', {
            loggedIn: req.session.loggedIn,
            id: req.session.userid
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
         res.render('login', {
            loggedIn: req.session.loggedIn,
            id: req.session.userid
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;