// Declaring different variables
var maze = [],food = [];
var gameState = "PLAY";
var score = 0;
var rez = 10;



// Calling the function preload
function preload() {

  // Loadinf=g the sound and image indifferent variables
  gameOver = loadImage("Sound/GameOver.png");
  sound = loadSound("Sound/Sound.mp3");
}



// Calling the dunction setup
function setup() {

  // Creating a canvas
  createCanvas(400,400);
  
  // Changing the frame rate
  frameRate(5);

  // Keeping track of the x and y in scale
  w = floor(width/rez);
  h = floor(height/rez);

  // Creating a new snake
  snake = new Snake();

  // Declaring the function foodLoacation
  foodLocation();
}



// Calling the function foodLocation
function foodLocation() {

  // Declaring x and y
  var x = floor(random(1,w-1));
  var y = floor(random(1,h-1));

  // Creating food at x and y
  rectMode(CENTER);
  food = createVector(x,y);
}



// Main part of the code called
function draw() {
  // Scalling the canvas
  scale(rez);

  // Colouring the background
  background(0);

  // Displaying the score and mouseX and mouseY
  textSize(10/rez);
  text(floor(mouseX / rez) + "," + floor(mouseY /rez),10/rez,15/rez);
  textSize(20/rez)
  stroke("red");
  fill("blue");
  strokeWeight(0.1);
  text("Score : " + score, 30,2);

  // Making a rectangle at food's position
  noStroke();
  rectMode(CENTER);
  fill("yellow");
  rect(food.x,food.y,1,1);

  // Creating food at a new location, increasing the score by 1 and playing the sound if the snake eats the food
  if(snake.eat(food)) {
    foodLocation();
    score++;
    sound.play();
  }

  // Updating and displaying the snake
  snake.update();
  snake.display();

  // Displaing game over and score when the game ends
  if(snake.endGame()) {
    background(gameOver);
    textSize(4);
    text("YOU SCORED : " + score, 3,34);
    noLoop();
  }
}



// Calling the function key pressed
function keyPressed() {

  // Changing the direction when different keys are pressed
  if(keyCode === UP_ARROW) {
    snake.setDir(0,-1);
  }

  if(keyCode === RIGHT_ARROW) {
    snake.setDir(1,0);
  }

  if(keyCode === DOWN_ARROW) {
    snake.setDir(0,1);
  }

  if(keyCode === LEFT_ARROW) {
    snake.setDir(-1,0);
  }
}