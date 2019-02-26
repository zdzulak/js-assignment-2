//declaring variables
var displayedImage = document.querySelector('.main-img');
var preview = document.querySelector('.thumbnails');
var title = document.querySelector('.title');

// an array of the image file locations
var imgArray = ["flowers-pink-small.jpg", "flowers-purple-small.jpg", "flowers-red-small.jpg", "flowers-white-small.jpg", "flowers-yellow-small.jpg", "flowers-red-small.jpg"]

// for loop to create all the img elements in the li element
for (var i = 0; i< imgArray.length; i++) {
  var newLi = document.createElement('li');
  var newImage = document.createElement('img');

  newImage.setAttribute('src','images/' + imgArray[i]);

  newLi.appendChild(newImage);
  preview.appendChild(newLi);
}

// function to change the main image
function changeMain(value) {
  displayedImage.setAttribute('src', value);
}

// onclick to change the main image to the specific image that was clicked
preview.onclick = function(event){
  var imgSrc = event.target.getAttribute('src');
  var result = imgSrc.slice(0, imgSrc.length -9) + "large.jpg";

  var colour = imgSrc.slice(15, imgSrc.length -10);
  title.textContent = "The flower is " + colour + ".";

  changeMain(result);
}
