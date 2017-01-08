function welcomeorakanggo(db) {
	const shortid = require('shortid');
	const books = db.collection('book');
	this.index = function(req,res,next) {
		res.send('selamat datang');
	}

	this.book = function(req,res,next) {
		books.find().toArray(function(err, doc) {
			res.render('book', {
				data : doc,
				param : 'view'
			});
		});
	}

	this.book_add = function(req,res,next) {
		res.render('book', {
			param : 'add'
		});
	}

	this.book_save = function(req,res,next) {
		req.body._id=shortid.generate();
		books.insert(req.body, function(err, doc) {
			if(!err) {
				res.redirect(301, '/book');
			} else {
				console.error(err);
			}
		});
	}

	this.book_one = function(req,res,next) {
		books.findOne({_id:req.params.id}, function(err, doc) {
			res.render('book', {
				data : doc,
				param : 'edit'
			});
		});
	}

	this.book_edit = function(req,res,next) {
		books.update({_id:req.params.id}, {$set:req.body}, function(err, doc) {
			if(!err) {
				res.redirect(301, '/book');
			} else {
				console.error(err);
			}
		});
	}

	this.book_delete = function(req,res,next) {
		let id = req.params.id;
		books.remove({_id:id}, function(err, result) {
			if(!err) {
				res.redirect(301, '/book');
			} else {
				console.error(err);
			}
		});
	}
}
module.exports = welcomeorakanggo;