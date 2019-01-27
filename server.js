const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname +'/public'));  //__dirname stores path of project root folder

//registering a middleware
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}${req.method}${req.url}`;
  console.log(log);
  fs.appendFile('server.log',log +'\n', (err) => {
    if(err){
      console.log('Unable to append to server.log');
    }
  });
  next();
});

//registering maintenanceMessage
// app.use((req, res, next) => {
//     res.render('maintenance.hbs',{
//     pageTitle:'Maintenance',
//     maintenanceMessage:'We will be back soon'
//   });
// });


//***** sending Simple Hello Message
app.get('/',(req,res)=>{
  res.send('<h1>Hello from Expressjs !!</h1>');

});

//***** sending JSON data
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'About Page',
    footerText:'@Copyright 2019 -Durgesh'
  });

});

app.get('/home',(req,res)=>{
  res.render('welcome.hbs',{
    pageTitle:'Welcome Page',
    welcomeMessage:'Welcome User',
    footerText:'@Copyright 2019 -Durgesh'
  });

});

//**** error Message
app.get('/bad',(req,res)=>{
  res.send(
      {
        errorCode:1000,
        errorMessage:'Error occured, request not fulfilled'
      }
  );
});

app.listen(2000, () => {
  console.log('Server is up on port 2000');
});
