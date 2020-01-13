let colors = [
  "rgb (255, 0, 0)",
  "rgb (255, 255, 0)",
  "rgb (255, 255, 255)",
  "rgb (0, 0, 255)",
  "rgb (0, 255, 255)",
  "rgb (255, 0, 255)",
  ]

let squares = document.querySelectorAll(".square");
for (let i = 0; i < squares.length; i ++){
  squares[i].style.backgroundColor = colors[i]
}

// let colors = generateRandomColors(6);
function generateRandomColors(){
  let array = [];
  for(let i = 0; i < squares.length; i ++){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb ("+ r +" , "+ g +" , " + b + ")";
  }
}



let pickedColor = "";
function pickColor(){ // pick random colors
  let random = Math.floor(Math.random()*colors.length);
  return colors[random];
}

let colorDisplay = document.getElementById("display");
colorDisplay.textContent = pickedColor;
for(let i = 0; i < squares.length; i ++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click",function(){
    let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor){
        alert("correct!");}
      else {this.style.backgroundColor = "#232323"} //black

    let messageDisplay = document.querySelector("#message");
      if(clickedColor === pickedColor){
      messageDisplay.textContent = "correct"
      }
      else {
      messageDisplay.textContent = "Try again"
      }
    })
  }

function changeColors(color){ //change squares into a color that is a winning color
  for(let i = 0; i < squares.length; i ++){
    squares[i].backgroundColor = color;
  }
}
