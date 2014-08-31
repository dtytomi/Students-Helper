
/*
 * GET home page.
 */

 var	mongoose = require('mongoose'),	
 	 	Student = mongoose.model('Student');

exports.index = function(req, res){
  res.render('index', { title: 'Recommeder System' })
};

exports.list = function( req, res){
	Student.find({}, function(err, students){
		if (err){
			console.log(err);
		}
		else {
			console.log(students);
			res.json(students)
		}
	})
};

exports.create = function( req, res){
	var student = new Student(req.body);

	student.save(function(err){
		if(err){
			throw 'Error';
		}
		else {
			res.json(student);
		}
	});

};

exports.student = function( req, res){
	var studentId = req.params.id;
	Student.findById( studentId, function( err, student){
		if(err) {
			console.log(err);
		}
		else {
			res.json(student);
		}
	});
};