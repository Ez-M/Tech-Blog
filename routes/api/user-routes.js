const router = require('express').Router();
const {Post, User, Comment} = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({
        user_name: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.res.redirect("/")
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Login
  router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          email: req.body.emailLogin,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      // const validPassword = await dbUserData.checkPassword(req.body.passwordLogin);
      if (req.body.passwordLogin == dbUserData.password) {
        var validPassword = true
      } else { var validPassword = false }
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userid = dbUserData.id;
        req.session.postid = 0;
        console.log(req.session.userid)
  
        res
          .status(200)
          .redirect('/')
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Logout
  router.get('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.redirect('/');
      });
    } else {
      res.status(404).end();
    }
  });
  

module.exports = router;