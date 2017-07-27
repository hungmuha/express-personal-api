var mongoose= require('mongoose'),
Schema=mongoose.Schema;

var businessSchema= new Schema({
	dba: String,
	industry: String,
	employees: String,
	earning: String
});

var Business=mongoose.model('Business',businessSchema);
module.exports = Business;