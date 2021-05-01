const express = require("express");
const mongoose = require("mongoose");
var {createuser,getusers,getuser,updateuser,removeuser} = require('./api/controller');
var log = require('morgan')('dev');
var router = express.Router();

const app = express();
const port = process.env.PORT || 8880 ;

require("./api/conn");


// var router = express.Router();

app.use(log);
app.use(express.json());
app.use(express.urlencoded({extended:false, useNewUrlParser : true, useUnifiedTopology: true}));
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


app.post('/create', createuser);
app.get('/get', getusers);
app.get('/get/:name', getuser);
app.patch('/update/:id', updateuser);
app.delete('/remove/:id', removeuser);

app.get('/get', (req,res)=>{
    
    console.log(getusers , Users);
    res.send("hello2");
    
});


// router.get('/get/:name', Users.getuser);
// router.patch('/update/:id', Users.updateuser);
// router.delete('/remove/:id', Users.removeuser);

app.get('/',(req,res)=>{
    res.send("hello");
})
app.listen(port , ()=>{
    console.log(`server is up and running at ${port}`);
});