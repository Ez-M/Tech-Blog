const router = require('express').Router();

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

module.exports = router;