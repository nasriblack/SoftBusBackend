const bcrypt = require('bcryptjs');

const users = [
    {
        _id: "645f7e130ba9d3c3ea50555a",
        username: "nasri",
        email: 'naserlakhal@gmail.com',
        password: bcrypt.hashSync('123456'),
        role: 'user'
    }
]

module.exports = users;