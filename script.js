// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let songImgList = [
  "https://i.ytimg.com/vi/W1LsRShUPtY/maxresdefault.jpg", "https://i.scdn.co/image/ab67616d0000b2734384b6976cadaec272114022", "https://upload.wikimedia.org/wikipedia/en/a/ae/Kickstart_my_heart.jpg",
  "https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg"];

let songNameList = ["old time rock and roll", "i was made for lovin you", "kickstart my heart", "master of puppets"];

let songArtists = ["Bob Seger", "KISS", "Mötley Crüe", "Metallica"];

let songLinks = ["https://www.youtube.com/watch?v=W1LsRShUPtY",
  "https://www.youtube.com/watch?v=ZhIsAZO5gl0",
  "https://www.youtube.com/watch?v=CmXWkMlKFkI",
  "https://www.youtube.com/watch?v=E4Vii24H_uU"];





//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let userInputURL = image.value
  let userInputName = songName.value
  let userInputArtist = artist.value
  let userInputLink = songLink.value
  // task 10: use `.push()` to add each input value to the correct array.
  songImgList.push(userInputURL);
  songNameList.push(userInputName);
  songArtists.push(userInputArtist);
  songLinks.push(userInputLink);
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

  //for (let i = 0; i < songImgList.length; i++) {
    //displayImage.insertAdjacentHTML('beforeend', `<img src=${songImgList[i]}>`);
   // displayImage.insertAdjacentHTML('beforeend', `<p>hello</p>`);
  //}
  songImgList.forEach(function(img){
    displayImage.insertAdjacentHTML('beforeend', `<img src=${img}>`);
  })
    songNameList.forEach(function(name){
    displaySong.insertAdjacentHTML('beforeend', `<p>${name}</p>`);
  })
 songArtists.forEach(function(artists){
    displayArtist.insertAdjacentHTML('beforeend', `<p>${artists}</p>`);
  })
  songLinks.forEach(function(link){
    displayLink.insertAdjacentHTML('beforeend', `<a href= "${link}">${link}</a>`);
  })
}

//let songImgList = [
  

//let songNameList = [
//let songArtists = [
//let songLinks = [




// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
