var sun, grass, cow, sheep, car, road, house, smoke, button;
var sunImg, grassImg, cowImg, sheepImg, carImg, roadImg, houseImg, smokeImg;
var bgColor = 255;
var gameState = 0;

function preload() {
  sunImg = loadImage("Images/sun.png")
  grassImg = loadImage("Images/grass.jpg")
  cowImg = loadImage("Images/Cow.png")
  sheepImg = loadImage("Images/Sheep.png")
  carImg = loadImage("Images/car.png")
  roadImg = loadImage("Images/road.jpg")
}
function setup() {
  createCanvas(800,600);
  //sun = createSprite(650, 50, 25, 25)    // sun, grass, cow, sheep, road, car
  grass = createSprite(750, 50, 25, 25)
  cow = createSprite(650, 125, 25, 25)
  sheep = createSprite(750, 125, 25, 25)
  road = createSprite(750, 200, 25, 25)
  car = createSprite(650, 200, 25, 25)
  house = createSprite(650, 275, 25, 25)
  smoke = createSprite(750, 275, 25, 25)
  button = createSprite(700, 400)
  //sun.addImage(sunImg)
  grass.addImage(grassImg)
  cow.addImage(cowImg)
  sheep.addImage(sheepImg)
  car.addImage(carImg)
  road.addImage(roadImg)
  grass.scale = 0.3
  //sun.scale = 0.05
  cow.scale = 0.05
  sheep.scale = 0.05
  car.scale = 0.05
  road.scale = 0.25;
  button.shapeColor = "blue"
  document.body.style.cursor = "crosshair"; void 0;
}

function draw() {
  background(bgColor);  
  rectMode(CENTER);
  fill("white")
  rect(250, 300, 400, 265)
  rect(700, 300, 200, 600)
  console.log("drag the components in this order - car, road, grass, cow, sheep")
  if (keyDown("up_arrow")) {
    bgColor = bgColor - 10;
  }
  if (keyDown("down_arrow")) {
    bgColor = bgColor + 10
  }
    // if (mousePressedOver(sun)) {
    //   sun.x = mouseX;
    //   sun.y = mouseY;
      
    // }
    else if (mousePressedOver(cow)) {
      cow.x = mouseX;
      cow.y = mouseY;
      cow.scale = 0.05;
    }
    else if (mousePressedOver(sheep)) {
      sheep.x = mouseX;
      sheep.y = mouseY;
      sheep.scale = 0.05;
    }
    else if (mousePressedOver(grass)) {
      grass.x = mouseX;
      grass.y = mouseY;
      grass.scale = 1.675;
    }
   else  if (mousePressedOver(road)) {
      road.x = mouseX;
      road.y = mouseY;
      road.scale = 0.66;
    }
    else  if (mousePressedOver(car)) {
      car.x = mouseX;
      car.y = mouseY;
      car.scale = 0.05;
    }
    if (mousePressedOver(button)) {
      gameState = 1;
    }
    
    if (gameState == 1) {
      camera.y = car.y;
    }

    if (keyDown("space")) {
      car.y = car.y -1 ;
    }

  drawSprites();

}