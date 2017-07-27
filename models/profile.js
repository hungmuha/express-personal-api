var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var profileSchema = new Schema({
	name: String,
	days_old: Number,
	github_link: String,
	current_city: String,
	nationality: String,
	occupation: String,
	quote: String,
	is_awake: Boolean,
	is_hungry: Boolean
});

var Profile=mongoose.model('Profile',profileSchema);
module.exports = Profile;