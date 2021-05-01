const { ObjectID } = require('bson');
var Users = require('./dao');
// const mongoose = require("mongoose");
// const mongodb = require("mongodb");

exports.createuser = async function (req, res, next) {
    console.log(req.body)

    // if(Object.keys(req.body).length===0){
  
    // }
    var user = {
        name: req.body.name,
        image: req.body.image,
        conNumber: req.body.conNumber,
        email: req.body.email,
        address: req.body.address
        
    };

    Users.create(user, function(err, user) {
        console.log(res.json);
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "user created successfully"
        })
    })
    // const person= await Users.create(user);
    // if(!person){
    //     res.send("error")
    // };
    // res.send(person);
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

exports.updateuser = async function(req, res, next) {
    var user = {
        name: req.body.name,
        image: req.body.image,
        conNumber: req.body.conNumber,
        email: req.body.email,
        address: req.body.address
        
    }
    console.log(req.params.id);
    Users.Update({_id: req.params.id}, user, function(err, user) {
    // Users.Update({_id:mongodb.ObjectID(req.params.id)}, user, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User updated successfully"
        })
    })
    // const per = await Users.findByIdAndUpdate({_id: req.params.id},{new: true});
    // if(!per){
    //     res.send("error");
    // }
    // res.send(per);
   
//         function(err, user) {
//         console.log(user);
//         if(err) {
//                     res.json({
//                         error : err
//                     })
//                 }
//                 res.json({
//                     message : "User updated successfully"
//                 })
//     })
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