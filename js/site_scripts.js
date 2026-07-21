//============================================
//Partners section - converted from HTML to JavaScript
//Shared by index.html, activities.html and contact.html
//============================================

var fileNames = ["bustour", "cabinrental", "campingadv", "collegetours", "rentalbike", "tourgroup"]; //Image file names
var altNames = ["Partner Bus Tours", "Partner Cabin Rental", "Partner Camping Adventure", "Partner College Tours", "Partner Bike Rentals", "Partner Tour Group"]; //Image alt texts
var photos = []; //Declare an empty array to store image elements
var imageList = []; //Declare an empty array to store html list that contain an image
var image; //Declare an empty variable to store the assembled image list codes
var openList = "<li class='partner'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain close list tag

//Create a loop to create 6 images starting with index of 0
for (var i = 0; i < 6; i++) {
  photos.push("<img src='images/partners/partner-" + fileNames[i] + ".png' alt='" + altNames[i] + "'>"); //Assemble file name into image element and store in an array
  image = openList + photos[i] + closeList; //Assemble image element from array with list elements and store in a variable
  imageList.push(image); //Store(push) the assembled list codes into an array
}

//Display all six image codes stored in the array
//join("") glues the list items together with nothing in between (no commas)
document.getElementById("partners").innerHTML = imageList.join("");
