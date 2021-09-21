const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));



//set up the routes
//route the home page....
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

//route path '/', route handler req, and res...

//route to the login page..
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
});

//set up routes for post request..
app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.send(`username: ${username} password: ${password}`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`port is listning at : ${port}`);
})