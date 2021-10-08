const {Post, User, Comment} = require('../../models');

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
                    
                    // res.status(200).json(dbPostData);
                    res.redirect("back")
                  }
        
                  catch (err) {
                    console.log(err);
                    res.status(500).json(err);
                  }
                } 
       });     


               // post for adding new produc tlisting
               router.post('/comment', async (req, res) => {
                if (!req.session.loggedIn) {
                    res.redirect('/login');
                } else {
            
                    try {
                        const dbPostData = await Comment.create({
                        description: req.body.description,
                        user_id: req.session.userid,
                        post_id: req.session.postid,
                        });
                        
                        // res.status(200).json(dbPostData);
                        res.redirect("back")
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
                    const dbPostData = await Post.findByPk(req.params.id,{
                        include: [ User, Comment ]
                            // {
                            //     model: User,
                            //     attributes: ['id', 'user_name', 'email',
                            //     ],
                            //   },
                            //   {
                            //     model: Comment,
                            //     attributes: ['id', 'description',
                            //     ],
                            //   },]
                               
                    });
                    
                    
                    // const dbCommentData = await Comment.findAll({
                    //   where: {
                    //     post_id: req.params.id
                    //   }
                    // });
                    // const comments = dbCommentData.map( data => data.get({ plain: true}));
                    const post = dbPostData.get({ plain: true });
                    req.session.save(() => {
                      req.session.postid = post.id;
                      console.log(req.session.postid)                
                    });
                    // res.status(200).json(dbPostData);
                    res.render('post', { 
                      post, 
                      // comments,
                      loggedIn: req.session.loggedIn, 
                      id: req.session.userid })
                  }
        
                  catch (err) {
                    console.log(err);
                    res.status(500).json(err);
                  }
                } 
       });
module.exports = router;