const { Post } = require('../models');

const postdata = [
  {
    id: 1,
    post_name: 'testpost1',
    description: 'ipsum lorem 123 asdfasdfsdfdsfasdfsadfsfsfsdfsfdasdfsadfds',
    user_id: 1,
  },
  {
    id: 2,
    post_name: 'testpost2',
    description: 'ipsum lorem 234 asdfasdfsdfdsfasdfsadfsfsfsdfsfdasdfsadfds',
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
