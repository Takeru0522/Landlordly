const User = require('../models/users');
module.exports = {
    index: async (req, res) => {
        try {
        const allUsers = await User.find({});
        res.render('../views/users/index', {title: 'Users'}, {
            users: allUsers
        })
        } catch (err) {
            res.send(err);
        }
    },
    new: async (req, res) => {
        res.render('../views/users/new', {title: 'Person'});
    }
}