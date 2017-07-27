message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/hungmuha/express-personal-api", 
    base_url: "https://intense-harbor-25919.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me and cool quote"}, 
      {method: "GET", path: "/api/business/:dba", description: "Data about a specific business by input 'dba'"},
      {method: "GET", path: "/api/business/search", description: "Data about a specific business by input search query on how many emloyee= "},  
      {method: "POST", path: "/api/businesses", description: "My awesome business that make me Billions of dollars"} 