const Post = require('../../models/post');
const User = require('../../models/user');
const Comment = require('../../models/comment');

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
                    user_id: req.session.userid
                    });
                    
                    res.status(200).json(dbPostData);
                    // res.redirect("/")
                  }
        
                  catch (err) {
                    console.log(err);
                    res.status(500).json(err);
                  }
                } 
       });     



       router.get('/:id', async (req, res) => {
           if (!req.session.loggedIn) {
               res.redirect('/login');
           } else {
        
                try {
                    const dbPostData = await Post.findByPk(req.params.id, {
                        include: [
                            {
                                model: User,
                                attributes: ['id', 'user_name', 'email',
                                ],
                              },
                              {
                                model: Comment,
                                attributes: ['id', 'comment_name', 'description',
                                ],
                              },
                               ]
                    });
                    
                    const post = dbPostData.get({ plain: true });
                    // res.status(200).json(dbProductData);
                    res.render('post', { post, loggedIn: req.session.loggedIn, id: req.session.userid })
                  }
        
                  catch (err) {
                    console.log(err);
                    res.status(500).json(err);
                  }
                } 
       });
module.exports = router;