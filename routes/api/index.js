const router = require('express').Router();
const userRoutes = require('./user-routes');
const postsRoutes = require('./posts-routes');

router.use('/posts', postsRoutes);

router.use('/user', userRoutes);

module.exports = router;
