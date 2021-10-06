const { User } = require('../models');

const userData = [
  {
    id: 1,
    user_name: 'Blossoming Apricot',
    password: 'testpass',
    email: 'test@testmail.com'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
