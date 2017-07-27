// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

//function on the stretch, for the days_old
var birthday = new Date('1990-12-07');
var today = new Date();
//function for is_awake
function awake(){
	if(today.getHours()>8 && today.getHours()<22){
		return true;
	}else{ return false};
};
//function to determine hunger
function hungry(){
	if(today.getHours()>10 && today.getHours()<13){	//lunch time condition
		return true;
	}else if(today.getHours()>17 && today.getHours()<20){	//dinner time condition
		return true;
	}else{return false};	
};

//profile hardcode data
var profileList = {
	name: "Hung Muhamath Nguyen Si",
	days_old: Math.ceil((today.getTime()-birthday.getTime())/(1000*60*60*24)),
	github_link: "https://github.com/hungmuha/",
	current_city: "Denver, Colorado",
	nationality: "Vietnamese",
	occupation: "bad-ass web developer",
	quote: "hustle hard, don't ever stop",
	is_awake: awake(),
	is_hungry: hungry()
};

//business hardcode data
var businessList = [
	{
		dba: "Soboss",
		industry: "Fitness",
		employees: "4",
		earning: "$1,000,000/year", 
	},
	{
		dba: "Beast Code",
		industry: "Technology",
		employees: "10",
		earning: "$10,000,000/year", 
	},
	{
		dba: "Trans-Pacific",
		industry: "Currency trading",
		employees: "5",
		earning: "$100,000,000/year", 
	}
];
//remove and populate database Profile
db.Profile.remove({},function(err, profiles){
	console.log("remove all profile");
	db.Profile.create(profileList,function(err,profiles){
		if(err){
			return console.log("Error: ", err);
		}
		console.log("created the profiles");
	});
});

//remove and populate database Business
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
