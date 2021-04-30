var Users = require('./dao');

exports.createuser = function (req, res, next) {
    var user = {
        name: req.body.name,
        image: req.body.image,
        conNumber: req.body.conNumber,
        email: req.body.email,
        address: req.body.address
        
    };

    Users.create(user, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "user created successfully"
        })
    })
}

exports.getusers = function(req, res, next) {
    Users.get({}, function(err, users) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            users: users
        })
    })
}

exports.getuser = function(req, res, next) {
    Users.get({name: req.params.name,}, function(err, users) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            users: users
        })
    })
}

exports.updateuser = function(req, res, next) {
    var user = {
        name: req.body.name,
        image: req.body.image,
        conNumber: req.body.conNumber,
        email: req.body.email,
        address: req.body.address
        
    }
    Users.updateMany({_id: req.params.id}, hero, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User updated successfully"
        })
    })
}

exports.removeuser = function(req, res, next) {
    Users.delete({_id: req.params.id}, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User deleted successfully"
        })
    })
}