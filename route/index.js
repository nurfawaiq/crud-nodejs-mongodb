module.exports = function(app, db) {
	const welcomeHandler = require('./welcome');
	let welcome = new welcomeHandler(db);
	app.get('/', welcome.index);
	app.get('/book', welcome.book);
	app.get('/book/add', welcome.book_add);
	app.post('/book/add', welcome.book_save);
	app.get('/book/edit/:id', welcome.book_one);
	app.post('/book/edit/:id', welcome.book_edit);
	app.get('/book/del/:id', welcome.book_delete);
} 