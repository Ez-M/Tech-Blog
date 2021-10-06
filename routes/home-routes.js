const router = require('express').Router();
const {Post, User, Comment} = require('../models/');
// const User = require('../models/user');


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

router.get('/dashboard', async (req, res) => {
    try {

        const dbPostData = await Post.findAll({
            include: [User]
            //     {
            //         model: User,
            //         // attributes: [
            //         //     'id',
            //         //     'post_name',
            //         //     'description',
            //         // ],
            //     },

        })

        const posts = dbPostData.map( data => data.get({ plain: true}));
            // res.render('dashboard', {
            //     posts,
            //     loggedIn: req.session.loggedIn,
            //     id: req.session.userid
            // });
            res.json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;