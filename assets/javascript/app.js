//Elected Offical Object
var ElectedOfficial ={
  "firstName": "",
  "lastName": "",
  "streetNumber": "",
  "streetName": "",
  "state": "",
  "zip": "",
  "role": "",
  "phoneNum": "",
  "website": "",
  "party": "",
  "imgSrc": "",
  "totalMoney": "",
  "spent": "",
  "onHand": "",
  "top3IndustryDonors": [],
  "top3Contributors": []
};

// Creating new instance of an elected official
 var rep = Object.create(ElectedOfficial);

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
  var getOfficialIdAndInfo = function(stateAbr) {
    queryURL = "http://www.opensecrets.org/api/?method=getLegislators&id=" + stateAbr + "&output=json&apikey=a71e46d929b085eda4974bae83338ee6";
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).done(function(response) {
      console.log(response);
    });
  };
  getOfficialIdAndInfo('CO');
});
