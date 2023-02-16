
img = "";
status = "";
objects = [];
function preload(){
  img = loadImage('dog_cat.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML= "Status is like, detecting objects and stuf , so like, uh, yeah.";

}

function draw() {
  image(img, 0, 0, 640, 420);
  
  if(status != "")
  {

  }
}

function modelLoaded() 
{
  console.log("Model Loadeddddddddd!!11!1");
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
  if (error)
  {
    console.log(error);
  }
  console.log(results);
  objects = results;
}