var ellipseX = []; //Array of X values for the bubbles
var ellipseY = []; //Arry of Y values for the bubbles
var velocityX = [-1,1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1]; //X value velocity
var velocityY = [-0.5,-0.5,0.5,-0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5]; //Y value velocity
var x, y, vx, vy, xdistance, ydistance; //various values
var counter = 250;
var start = false;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight/1.05);

  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');

  background(5, 42, 73);
}

function draw() {
  if(!start){create();}
  background(5, 42, 73);
  var i = 0;
  while(i < counter){
    x = ellipseX[i];
    y = ellipseY[i];
    fill(179, 182, 183);
    // stroke(179, 182, 183);
    stroke(75, 208, 244);
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
        stroke(75, 208, 244);
        line(x, y, x2, y2);
        }
      }
      c += 1;
    }

    velocityX[i] = vx;
    velocityY[i] = vy;
    ellipseX[i] = x;
    ellipseY[i] = y;


    i += 1;
  }

stroke(0);
fill(0);
textSize(200);
// textFont(metaBold, 44);
text("Dylan Wansrough", windowWidth/10, windowHeight/2);
}



function create(){
    for (index = 0; index < counter; index += 1) {
      var random = Math.floor((Math.random() * windowWidth) + 1);
      var random2 = Math.floor((Math.random() * windowHeight/1.05) + 1);
        ellipseX[index] = random;
        ellipseY[index] = random2;
    }
    start = true;
}
