var diam1=0;

function setup() {
  // put setup code here
    createCanvas (1900,1000);
    background ("#4245f4"); 
}

function draw() {
  // put drawing code here
    strokeWeight(5);
    fill("fdfefe")
    stroke("fdfefe")
    ellipse (mouseX-20,mouseY-20,100,100);
    
    fill ("#f4a041");
    stroke("#e74c3c")
    ellipse(random(1900), random (1000),100,100);
    console.log(diam1);
}

function mousePressed(){
    diam1=diam1+5;
}