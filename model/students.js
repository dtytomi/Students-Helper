var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var studentSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		default: '',
		trim: true,
		required: 'Name cannot be blank'
	},
	course: {
		type: String,
		default: '',
		trim: true
	},
	email: {
		type: String,
		default: '',
		trim: true
	},
	level: {
		type: String,
		default: '',
		trim: true
	
	},
	grade: {
		type: Number,
		default: 0
	}
});

mongoose.model('Student', studentSchema);
mongoose.connect('mongodb://localhost/studentSchema');