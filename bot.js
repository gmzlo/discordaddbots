const { Client, Util, bot, Mybot } = require('discord.js');
const fs = require("fs");
const request = require("request").defaults({encoding: null});

const client = new Client({ disableEveryone: false });

const newUsers = [];

require("./functions/functions.js")(client);

fs.readdir("./events/", (err, files) => {
	console.log(`Logging in Neko
	  \\    /\\
	   )  ( \')
	   (  /  )
		\\(__)|
	Adding The following events`);
		console.log(`${files.map(g => `${g.split(".")[0]}`).join(", ")}`);
		if (err) return console.error(err);
		files.forEach(file => {
			let eventFunction = require(`./events/${file}`);
			let eventName = file.split(".")[0];
			client.on(eventName, (...args) => eventFunction.run(client, ...args));
		});
		console.log(`Added ${files.length} events.`);
});

client.login(process.env.TOKEN);

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
