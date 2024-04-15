const productController = {
    index: function (req, res) {
        return res.render('index', {

        })
    },
    productos: function (req, res) {

        return res.render('product', {
        })
    },
    addProduct: function (req, res) {

        return res.render('product-add', {
        })


    },

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
    },
    resultadosBusqueda: function (req, res) {
        return res.render('search-results', {})
    }

};

module.exports = productController