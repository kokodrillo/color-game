let squares = document.querySelectorAll(".square");
let colors = generateRandomColors(6); // generate colors for 6 squares randomly
// let colors = [
//   "rgb (255, 0, 0)",
//   "rgb (255, 255, 0)",
//   "rgb (255, 255, 255)",
//   "rgb (0, 0, 255)",
//   "rgb (0, 255, 255)",
//   "rgb (255, 0, 255)",
//   ]
let pickedColor = pickColor();
let colorDisplay = document.getElementById("display");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");

//reset button
resetButton.addEventListener("click", function(){
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i ++){
  squares[i].style.backgroundColor = colors[i];
}
})

//will change colors of squares
for (let i = 0; i < squares.length; i ++){
  squares[i].style.backgroundColor = colors[i]
}

// if you win/lose message display
colorDisplay.textContent = pickedColor;
for(let i = 0; i < squares.length; i ++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click",function(){
    let clickedColor = this.style.backgroundColor;

      if(clickedColor === pickedColor){  //changing h1 to the winning color as well if you win
        h1.style.backgroundColor = clickedColor;
        }
      else {this.style.backgroundColor = "#232323"} //black
      if(clickedColor === pickedColor){
      messageDisplay.textContent = "correct"
      }
      else {
      messageDisplay.textContent = "Try again"
      }
    });
  }



//if you win, change square's colors into a color that is a winning color
function changeColors(color){
  for(let i = 0; i < squares.length; i ++){
    squares[i].backgroundColor = color;
  }
}

// pick random colors
function pickColor(){
  let random = Math.floor(Math.random()*colors.length);
  return colors[random]; // extracting from array
}

//display random color in rgb format
function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb ("+ r +" , "+ g +" , " + b + ")";
  }

//generate random colors for squares
function generateRandomColors(){
  let array = [];
  for(let i = 0; i < squares.length; i ++){
    array.push(randomColor())
  }
  return array;
}

