const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err) {
            exports.json({
                error: err
            })
        }
        let user = new User ({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
        user.save()
            .then(user => {
                res.json({
                    message: 'Account created'
                })
            })
            .catch(error => {
                res.json({
                    message: 'Error occurred'
                })
            })
    })
}

module.exports = {
    register
}