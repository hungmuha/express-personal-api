// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

//get the profile
app.get('/api/profile',function(req,res) {
  //send the profile as JSON
  db.Profile.find()
  .exec(function(err, profiles){
    if(err) {return console.log("Err: ", err);}
    res.json(profiles);
  });
});

//post the business
app.post('/api/businesses',function(req,res){
  //create new business in db
  var newBusiness = new db.Business({
    dba: req.body.dba,
    industry: req.body.industry,
    employees: req.body.employees,
    earning: req.body.earning
  });
  //save the new created business
  newBusiness.save(function(err,business){
    if(err){
      return console.log("save error: ",err);
    };
    console.log("save");
    res.json(business);
  });
});

//get the business result based on the name
app.get('/api/businesses/:dba',function(req,res){
  db.Business.findOne({dba: req.params.dba},function(err,data){
    if(err){return console.log('error requesting name: ',err);}
    res.json(data);
  });
});

//creating a search endpoint
app.get('/api/businesses/search'),function(req,res){
  var query= req.query.employees;
  console.log(query);
  db.Business.find({query},function(err,data){
    if(err){return console.log('error query search: ',err);}
    res.json(data);
  });
}

//the instructional to all other end point
app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/hungmuha/express-personal-api", // CHANGE ME
    base_url: "https://intense-harbor-25919.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me and cool quote"}, 
      {method: "GET", path: "/api/business/:dba", description: "Data about a specific business by input 'dba'"},
      {method: "GET", path: "/api/business/search", description: "Data about a specific business by input search query on how many emloyee= "},  
      {method: "POST", path: "/api/businesses", description: "My awesome business that make me Billions of dollars"} 
    ]
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
