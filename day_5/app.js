//express: js web framework
const express = require('express')
const app = express();


//middleware
//req.header
const cookieParser = require('cookie-parser');
//req.query
const bodyParser = require('body-parser');

//view engine
const cors = require('cors');

//config
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


//get data from localhost:8080/get
app.get('/get',(req, res) => {
    //three types of requset
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);

    //then give res

    res.send("success");
})

//add data to localhost:8080/post
app.post('/post',(req, res) => {

})

//delete data to localhost:8080/delete
app.delete('/delete',(req, res) => {

})

//change data to localhost:8080/put
app.put('/put',(req, res) => {

})

//all restful request to localhost:8080/all
app.all('/all',(req, res) => {

})