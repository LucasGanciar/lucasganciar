const express = require('express');
const $ = require('jquery');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname,'../public');
app.use(express.static(publicpath));
app.listen(3000,function(){
    console.log('Server is Up');
});
