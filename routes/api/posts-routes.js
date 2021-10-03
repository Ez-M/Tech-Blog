const Post = require('../../models/post');
const User = require('../../models/user');

const router = require('express').Router();

        // post for adding new produc tlisting
        router.post('/new', async (req, res) => {
            if (!req.session.loggedIn) {
                res.redirect('/login');
            } else {
        
                try {
                    const dbPostData = await Post.create({
                    post_name: req.body.post_name,
                    description: req.body.description,
                    });
                    
                    // res.status(200).json(dbProductData);
                    res.redirect("/")
                  }
        
                  catch (err) {
                    console.log(err);
                    res.status(500).json(err);
                  }
                } 
       });     
module.exports = router;