var i = 0; //start point
var image = [];
var time = 3000;

//Image list
image[0] = "image1.jpg";
image[1] = "image2.jpg";
image[2] = "image3.jpg";


//Change image
function changeImg() {
  document.slide.src = image[i];

  if (i <= image.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changeImg(), time);
}

window.onload = changeImg;
