
// Global variables
 var senator1;
 var senator2;
 var houseRep;
var myGoogleResponse;

//Firebase
var config = {
  apiKey: "AIzaSyCi-dzO9wATSlwXs5EJCzBMvKjGflTy850",
  authDomain: "voterapp-839b2.firebaseapp.com",
  databaseURL: "https://voterapp-839b2.firebaseio.com",
  projectId: "voterapp-839b2",
  storageBucket: "voterapp-839b2.appspot.com",
  messagingSenderId: "96769787339"
};
firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function() {
  // AJAX calls
  // var getOfficialIdForOS = function(stateAbr) {
  //   var queryURL = "http://www.opensecrets.org/api/?method=getLegislators&id=" + stateAbr + "&output=json&apikey=a71e46d929b085eda4974bae83338ee6";
  //   $.ajax({
  //     url: queryURL,
  //     method: 'GET',
  //   }).done(function(res) {
  //     console.log(res);
  //   });
  // };

  var getGoogleInfo = function(streetNum, streetName, city, state){
    var queryURL = "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDI1kvAcYil3IZ4Tkt2BiZ4NWUJHfOpYoo" +
      "&address="+ streetNum +"%20"+ streetName + "%20"+ city +"%20"+ state + "&roles=legislatorUpperBody&roles=legislatorLowerBody"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      myGoogleResponse=response;
      // Assigning rep responses to variables
      senator1 = myGoogleResponse.officials[0]
      senator2 = myGoogleResponse.officials[1]
      houseRep = myGoogleResponse.officials[2]

      // Calling parse function for each representative and saving new objects in variables
      var myFirstSenator = parseRepInfoFromGoogle(senator1);
      var mySecondSenator = parseRepInfoFromGoogle(senator2);
      var myHouseRep = parseRepInfoFromGoogle(houseRep);

    });
  };

  // Calling Google API for an example
  getGoogleInfo("2631", "river dr", "denver", "co");

  // Function to parse info from API resonse and create/return new Rep object
  parseRepInfoFromGoogle=function(rep){
    var newRep = {
      name:rep.name,
      party:rep.party,
      imgSrc:rep.photoUrl,
      addrLine1:rep.address[0].line1,
      city: rep.address[0].city,
      state: rep.address[0].state,
      zip:rep.address[0].zip,
      fb: rep.channels[0].id,
      twitter:rep.channels[1].id,
      youTube:rep.channels[2].id,
      phone: rep.phones,
      website: rep.urls[0]
    }
    return newRep;
  }
  // Calling Open Secret API for example
  //getOfficialIdForOS('CO');
});

industry_name
pacs
total
total
spent
cash_on_hand
debt
origin