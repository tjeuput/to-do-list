var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var displayColor = document.getElementById("colorDisplay");
var message=document.querySelector("#message");
displayColor.textContent= pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	
	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares(){
	for ( var i = 0; i < squares.length; i++) {
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clickes square
		
		var clickedColor = this.style.background;
		if (clickedColor===pickedColor){
			message.textContent ="Correct!";
			resetButton.textContent="Play again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			this.style.backgroundImage = "url(pip.jpeg)";
		
		} else {
				this.style.background= "#232323";
				message.textContent ="Try Again";
				
			}
		
		
	
	});
	
	}
}

function setupModeButtons(){
	for(var i = 0; i< modeButtons.length; i++ ){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	
	pickedColor = pickColor();
	
	colorDisplay.textContent = pickedColor;
	resetButton.textContent="New Colors";
	
	for ( var i =  0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
			else {
				squares[i].style.display = "none";
	}
	}
	h1.style.background="steelblue";
	}
		

resetButton.addEventListener("click", function(){
	reset();
	
})


function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background= color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
	
}
			 
function generateRandomColors(num){
	//make array
	var arr = [];
	//add num.random colors to array
	for(var i=0; i < num; i++){
		arr.push(randomColor());
		
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick red from 0-255
	var r = Math.floor(Math.random()*256);
	//pick green from 0-255
	var g = Math.floor(Math.random()*256);
	//pick blue from 0-255
	var b = Math.floor(Math.random()*256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")" ;
	
}
