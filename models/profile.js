var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var profileSchema = new Schema({
	name: String,
	github_link: String,
	current_city: String,
	nationality: String,
	dance: Boolean,
	quote: String
});

var Profile=mongoose.model('Profile',profileSchema);
module.exports = Profile;