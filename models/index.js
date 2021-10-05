// import models
const Comment = require('./comment');
const Post = require('./post');


// Comment belongsTo Post
Comment.belongsTo( Post, {
  foreignKey: 'category_id',
})

// Posts have many Comments
Post.hasMany( Comment, {
  foreignKey: 'category_id'
})



module.exports = {
  Post,
  Comment,
};
