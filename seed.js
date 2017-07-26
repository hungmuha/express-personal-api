// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var profileList = {
	name: "Hung Muhamath Nguyen Si",
	github_link: "https://github.com/hungmuha/",
	current_city: "Denver, Colorado",
	nationality: "Vietnamese",
	occupation: "bad-ass web developer",
	quote: "hustle hard, don't ever stop"
};

var businessList = [
	{
		name: "Soboss",
		industry: "Fitness",
		employees: "4",
		earning: "$1,000,000/year", 
	},
	{
		name: "Beast Code",
		industry: "Technology",
		employees: "10",
		earning: "$10,000,000/year", 
	},
	{
		name: "Trans-Pacific",
		industry: "Currency trading",
		employees: "5",
		earning: "$100,000,000/year", 
	}
];
db.Profile.remove({},function(err, profiles){
	console.log("remove all profile");
	db.Profile.create(profileList,function(err,profiles){
		if(err){
			return console.log("Error: ", err);
		}
		console.log("created the profiles");
	});
});

db.Business.remove({},function(err, businesses){
	console.log("remove all business");
	db.Business.create(businessList,function(err,businesses){
		if(err){
			return console.log("Error: ",err);
		}
		console.log(businesses);
	});
});
// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
