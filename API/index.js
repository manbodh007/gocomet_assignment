const express = require('express');

const app = express();
const port = 8000;
const controller = require('./controller/fetchData');
const cors = require('cors');
app.use(cors());

app.get('/postDetail/:link',controller.fetchPostDetails);
app.get('/search/:tagName',controller.fetchPost);


app.listen(port,(error)=>{
    if(error){
    console.log('error in server');
    return;
    }
    console.log('server is running on port:',port);
})