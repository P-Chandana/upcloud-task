const express = require("express");
const mongoose = require("mongoose");
var Users = require('./api/controller');
var log = require('morgan')('dev');

const app = express();
const PORT = process.env.PORT || 8000 ;

require("./api/conn");


// var router = express.Router();

app.use(log);
app.use(express.json());
app.use(express.urlencoded({extended:false, useNewUrlParser : true, useUnifiedTopology: true}));
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);




module.exports = function(router) {
    
    router.post('/create', Users.createuser);
    router.get('/get', Users.getusers);
    router.get('/get/:name', Users.getuser);
    router.patch('/update/:id', Users.updateuser);
    router.delete('/remove/:id', Users.removeuser);
}




app.listen(PORT , ()=>{
    console.log(`server is up and running at {PORT}`);
});