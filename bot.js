
// Web app (Express + EJS)
const http = require('http');
const express = require('express');
const app = express();
var ejs = require('ejs');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('views', __dirname + '/public');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// make express look in the `public` directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    // ejs render automatically looks in the views folder
    response.render('xe');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});

// pings server every 15 minutes to prevent dynos from sleeping
setInterval(() => {
 http.get('http://avastation.herokuapp.com');
}, 900000);
