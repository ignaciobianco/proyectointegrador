

const userController = {
    
    login: function (req, res) {
        return res.render('login', {
        })
    },

    profileEdit: function (req, res) {
        return res.render('profile-edit', {})
    },
    profile: function (req, res) {
        return res.render('profile', {})
    },

    register: function (req, res) {
        return res.render('register', {})
    }
    
    };
    
module.exports = userController