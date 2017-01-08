const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;
const route = require('./route');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
app.use('/bower', express.static(path.join(__dirname, './bower_components')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

mongo.connect('mongodb://localhost:27017/crud-nodejs', function(err, db) {
	if(db) {
		route(app, db);
	} else {
		console.error('Database tidak terkoneksi');
	}
})

app.listen(2017, () => {
	console.log('connected Port', 2017);
});