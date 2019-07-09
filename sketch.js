WIDTH=1024;
HEIGHT=600;
one = 100;
ticksize=4;

let pg;
  // each p holds parameters for a Plane
  // 0 - a
  // 1 - b
  // 2 - c
  // 3 - d
  // 4 - opacity

let p = [[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]];
let colorArray = [[255,0,255], [0,255,0], [0,0,255]];

function setup() {
  createCanvas(WIDTH,HEIGHT, WEBGL);
  // normalMaterial();
  // slider1 = createSlider(0, 50, 15);
  // slider2 = createSlider(0, 50, 15);
  // slider3 = createSlider(0, 10000, one*15);
  updateParameters();
  // img = loadImage('garfield.jpg');
}


function drawAxes(){
// x axis
  strokeWeight(3);
  stroke(255,0,0);
  push();
  for (i=0; i<WIDTH/2; i+=one){
    translate(one,0,0);
    sphere(ticksize);
  }
  pop();
  push();
  stroke(0);
  for (i=0; i<WIDTH/2; i+=one){
    translate(-one,0,0);
    sphere(ticksize);
  }
  pop();
  stroke(255,0,0);
  line(-WIDTH,0,0,WIDTH,0,0);

// y axis
  stroke(0);
  push();
  for (i=0; i<WIDTH/2; i+=one){
    translate(0,one,0);
    sphere(ticksize);
  }
  pop();
  push();
  stroke(0,255,0);
  for (i=0; i<WIDTH/2; i+=one){
    translate(0,-one,0);
    sphere(ticksize);
  }
  pop();
  stroke(0,255,0);
  line(0,-WIDTH,0,0,WIDTH,0);

  stroke(0,0,255);
  push();
  for (i=0; i<WIDTH/2; i+=one){
    translate(0,0,one);
    sphere(ticksize);
  }
  pop();
  stroke(0);
  push();
  for (i=0; i<WIDTH/2; i+=one){
    translate(0,0,-one);
    sphere(ticksize);
  }
  pop();
  stroke(0,0,255);
  line(0,0,-WIDTH,0,0,WIDTH);

}

function updateParameters(){
  p[0][0]=math.parse(document.getElementById("p0a").value).compile().eval();
  p[0][1]=math.parse(document.getElementById("p0b").value).compile().eval();
  p[0][2]=math.parse(document.getElementById("p0c").value).compile().eval();
  p[0][3]=math.parse(document.getElementById("p0d").value).compile().eval();
  p[1][0]=math.parse(document.getElementById("p1a").value).compile().eval();
  p[1][1]=math.parse(document.getElementById("p1b").value).compile().eval();
  p[1][2]=math.parse(document.getElementById("p1c").value).compile().eval();
  p[1][3]=math.parse(document.getElementById("p1d").value).compile().eval();
  p[2][0]=math.parse(document.getElementById("p2a").value).compile().eval();
  p[2][1]=math.parse(document.getElementById("p2b").value).compile().eval();
  p[2][2]=math.parse(document.getElementById("p2c").value).compile().eval();
  p[2][3]=math.parse(document.getElementById("p2d").value).compile().eval();
}

function draw() {
  orbitControl();
  background(100,100,125);
  drawAxes();
  fill(0);
  strokeWeight(5);
  ambientLight(200,200,255);
  specularMaterial(0,0,0,128);
  planeSize = document.getElementById("planeSize").value;


// draw the three planes
for (i=0; i<3; i++){
  i1 = "p"+i+"show";
  i2 = "p"+i+"opacity";
  if (document.getElementById(i1).checked){
    // this needs work
    equation = "      "+p[i][0]+"x + "+p[i][1]+"y + "+p[i][2]+"z"+" = "+p[i][3];
    document.getElementById("planetext"+i).innerHTML=equation;
    var op  = math.parse(document.getElementById(i2).value).compile().eval();
    push();
    if(p[i][0]==0 && p[i][2]==0 && p[i][1]==0){
    }
    else if (p[i][0]==0 && p[i][2]==0){
      rotateX(PI/2);
      translate(0,0,one*p[i][3]/p[i][1]);
      ambientMaterial(colorArray[i][0],colorArray[i][1],colorArray[i][2],op);
      plane(15*one,15*one,2,2);
    }
    else{
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      k = p[i][3]/sqrt(p[i][0]*p[i][0] + p[i][2]*p[i][2]);
      rotateY(atan(p[i][0]/p[i][2]));
      // rotateY(frameCount/1000);
      if (document.getElementById("debug").checked){
      translate(0,0,k*one);
}
else {
  translate(0,0,-k*one);

}
      rotateX(PI/2-atan( sqrt(p[i][0]*p[i][0] + p[i][2]*p[i][2]) / p[i][1]) );
      // rotateX(PI/2-atan(p[i][3]/p[i][1]/k));
      ambientMaterial(colorArray[i][0],colorArray[i][1],colorArray[i][2],op);
      plane(planeSize,planeSize,2,2);
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
    }
    pop();
  }
}



}
