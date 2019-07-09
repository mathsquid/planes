WIDTH=1024;
HEIGHT=600;
one = 100;
ticksize=4;

let pg;
let p1 = [1,1,1,1];
let p2 = [1,1,1,1];
let p3 = [1,1,1,1];
function setup() {
  createCanvas(WIDTH,HEIGHT, WEBGL);
  // normalMaterial();
  slider1 = createSlider(-500, 500, 100);
  slider2 = createSlider(-500, 500, 0);
  slider3 = createSlider(0, 314, 0);
  updateParameters();
  // img = loadImage('garfield.jpg');
}


function drawAxes(){
  strokeWeight(3);
  stroke(255,0,0);
  push();
  for (i=0; i<WIDTH/2; i+=one){
    translate(one,0,0);
    sphere(ticksize);
  }
  pop();
  push();
  for (i=0; i<WIDTH/2; i+=one){
    translate(-one,0,0);
    sphere(ticksize);
  }
  pop();
  line(-WIDTH,0,0,WIDTH,0,0);

  stroke(0,255,0);
  push();
  for (i=0; i<WIDTH/2; i+=one){
    translate(0,one,0);
    sphere(ticksize);
  }
  pop();
  push();
  for (i=0; i<WIDTH/2; i+=one){
    translate(0,-one,0);
    sphere(ticksize);
  }
  pop();
  line(0,-WIDTH,0,0,WIDTH,0);

  stroke(0,0,255);
  push();
  for (i=0; i<WIDTH/2; i+=one){
    translate(0,0,one);
    sphere(ticksize);
  }
  pop();
  push();
  for (i=0; i<WIDTH/2; i+=one){
    translate(0,0,-one);
    sphere(ticksize);
  }
  pop();
  line(0,0,-WIDTH,0,0,WIDTH);

}

function updateParameters(){
  p1[0]=math.parse(document.getElementById("p1a").value).compile().eval();
  p1[1]=math.parse(document.getElementById("p1b").value).compile().eval();
  p1[2]=math.parse(document.getElementById("p1c").value).compile().eval();
  p1[3]=math.parse(document.getElementById("p1d").value).compile().eval();
  p2[0]=math.parse(document.getElementById("p2a").value).compile().eval();
  p2[1]=math.parse(document.getElementById("p2b").value).compile().eval();
  p2[2]=math.parse(document.getElementById("p2c").value).compile().eval();
  p2[3]=math.parse(document.getElementById("p2d").value).compile().eval();
  p3[0]=math.parse(document.getElementById("p3a").value).compile().eval();
  p3[1]=math.parse(document.getElementById("p3b").value).compile().eval();
  p3[2]=math.parse(document.getElementById("p3c").value).compile().eval();
  p3[3]=math.parse(document.getElementById("p3d").value).compile().eval();
}

function draw() {


  orbitControl();
  background(100,100,125);
  drawAxes();
  fill(0);
  strokeWeight(5);
  ambientLight(200,200,255);
  specularMaterial(255,0,0);



  // draw the plane p1
  if (document.getElementById("p1show").checked){
    push();
    if (p1[0]==0 && p1[2]==0){
      rotateX(PI/2);
      translate(0,0,one*p1[3]/p1[1]);
      ambientMaterial(255,0,255,255);
      plane(15*one,15*one,2,2);
    }
    else{

    k = p1[3]/sqrt(p1[0]*p1[0] + p1[2]*p1[2]);
    if(p1[2]<0) k*=-1;
    rotateY(atan(p1[0]/p1[2]));
    rotateY(slider3.value()/100);
    translate(0,0,k*one);
    rotateX(PI/2-atan( sqrt(p1[0]*p1[0] + p1[2]*p1[2]) / p1[1]) );
    // rotateX(PI/2-atan(p1[3]/p1[1]/k));
    ambientMaterial(255,0,255,255);
    plane(15*one,15*one,2,2);
  }
pop();
}

  // draw the plane p2

  if (document.getElementById("p2show").checked){
    push();
    k = p2[3]/sqrt(p2[0]*p2[0] + p2[2]*p2[2]);
    if(p2[2]<0) k*=-1;
    rotateY(atan(p2[0]/p2[2]));
    rotateY(slider3.value()/100);
    translate(0,0,k*one);
    rotateX(PI/2-atan( sqrt(p2[0]*p2[0] + p2[2]*p2[2]) / p2[1]) );
    ambientMaterial(0,255,0,100);
    plane(15*one,15*one,2,2);
    pop();
  }






  // draw the plane p3
  if (document.getElementById("p3show").checked){
    push();
    k = p3[3]/sqrt(p3[0]*p3[0] + p3[2]*p3[2]);
    if(p3[2]<0) k*=-1;
    rotateY(atan(p3[0]/p3[2]));
    rotateY(slider3.value()/100);
    translate(0,0,k*one);
    rotateX(PI/2-atan( sqrt(p3[0]*p3[0] + p3[2]*p3[2]) / p3[1]) );
    // rotateX(PI/2-atan(p3[3]/p3[1]/k));
    ambientMaterial(0,0,255,100);
    plane(15*one,15*one,2,2);
    pop();
  }


  // // draw triangle
  // stroke(0,0,255);
  // line(p1[3]/p1[0]*one,0,   0,0,-one*p1[3]/p1[1],0);
  // line(0,-one*p1[3]/p1[1],0,  0,0,p1[3]*one/p1[2]);
  // line(0,0,p1[3]*one/p1[2],   p1[3]*one/p1[0],0,0);
  // normalMaterial();
  // stroke(255,255,0);
  // push();
  // translate( p1[3]*one/p1[0],0,0);
  // sphere(ticksize*2);
  // pop();
  // push();
  // translate(0,-p1[3]*one/p1[1],0);
  // sphere(ticksize*2);
  // pop();
  // push();
  // translate(0,0, p1[3]*one/p1[2]);
  // sphere(ticksize*2);
  // pop();
  //
  // // draw positive spheres
  // stroke(0,255,255);
  // push();
  // translate(one,0,0);
  // sphere(ticksize*2);
  // pop();
  // push();
  // translate(0,-one,0);
  // sphere(ticksize*2);
  // pop();
  // push();
  // translate(0,0,one);
  // sphere(ticksize*2);
  // pop();


  // stroke(0,0,0);
  // strokeWeight(5);
  // z1 = -7;
  // z2 = 7;
  // line(one*(1), -one*(.5-z1), one*(z1),
  // one*(1), -one*(.5-z2), one*(z2));
  //

}
