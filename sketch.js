var ellipseX = []; //Array of X values for the bubbles
var ellipseY = []; //Arry of Y values for the bubbles
var velocityX = []; //X value velocity
var velocityY = []; //Y value velocity
var x, y, vx, vy, xdistance, ydistance, velX, velY; //various values
var counter = 50;
var start = false;
var randomX = true;
var randomY = true;

var textSi;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight/1.05);

  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  window.resizeTo(windowWidth, windowHeight/1.05);

  background(5, 42, 73);
}




function draw() {
  if(!start){create();}
  background(65, 65, 65);
  var i = 0;
  while(i < counter){
    x = ellipseX[i];
    y = ellipseY[i];
    fill(65, 65, 65);
    stroke(65, 65, 65);
    ellipse(x,y, 5,5);

    vx = velocityX[i];
    vy = velocityY[i];
    x += vx; //adds the velocity onto X
    y += vy; //adds the velocity onto Y
    if(x > windowWidth - 10 || x < 10){vx = vx * (-1);} //if it hits a wall change direction
    if(y < 50){
      vy = vy * (-1);
      y = 50 + (50 - y);
    }
    if(y > windowHeight/1.05){
      vy = vy * (-1);
    }

    var c = 0;
    while(c < counter){
      if(c != i){
        x2 = ellipseX[c];
        y2 = ellipseY[c];
        xdistance = x - x2;
        ydistance = y - y2;
        if(xdistance < 150 && xdistance > -150 && ydistance < 150 && ydistance > -150){
        stroke(88, 211, 57);
        line(x, y, x2, y2);
        }
      }
      c += 1;
    }

    velocityX[i] = vx;
    velocityY[i] = vy;
    ellipseX[i] = x;
    ellipseY[i] = y;


    xdistance = x - mouseX;
    ydistance = y - mouseY;
    if(xdistance < 150 && xdistance > -150 && ydistance < 150 && ydistance > -150){
    stroke(88, 211, 57);
    line(x, y, mouseX, mouseY);
    }


    i += 1;
  }
}
