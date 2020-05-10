// create a function to generate a random rgb:
var randomColorGenerator = () => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

// create a function that creates an array of a
// given number of colors from the above function:
var addColors = (e) => {
  var arr = [];
  for (var i = 0; i < e; i++) {
    arr.push(randomColorGenerator());
  }
  return arr;
};

// create the array of colors:
var colors = addColors(6);

// target the boxes:
var body = document.querySelector("body");
var boxes = document.querySelectorAll(".box");
var resultMsg = document.querySelector("#resultMsg");

for (i = 0; i < boxes.length; i++) {
  // assign random colors to the boxes from the array created:
  boxes[i].style.backgroundColor = colors[i];
  // when any box is clicked...:
  boxes[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === lookupColor) {
      resultMsg.textContent = "YOU GOT IT RIGHT!!";
      changeColor(clickedColor);
    } else {
      this.style.backgroundColor = "rgb(223, 223, 223)";
      resultMsg.textContent = "TRY AGAIN!!";
    }
  });
}

// generate a random color from the array:
var randomFromColors = () => {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

//create a function to change color of
//all the boxes to the correct clicked color:
function changeColor(anyColor) {
  for (i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = anyColor;
  }
}

// show the generated color to the user, this is the color he/she
// is going the use to guess the right box:
var rgbText = document.querySelector("#rgb");
rgbText.style.textTransform = "uppercase";
lookupColor = rgbText.textContent = randomFromColors();
