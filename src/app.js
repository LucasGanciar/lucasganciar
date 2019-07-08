const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
app.use(express.static(publicpath));
app.listen(port,function(){
    console.log('Server is Up');
});
