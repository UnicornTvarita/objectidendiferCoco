function setup(){
 con = createCanvas(640,420)
 con.center()
 mymodel = ml5.objectDetector('cocossd',modelLoaded)
 document.getElementById("status"). innerHTML = "DETECTION HAS BEGUN"
}
 objects =[]
 cute  =""
 status =""
 function modelLoaded(){
console.log("Model has loaded")
status = true
    mymodel.detect(cute,gotResult)
 }
 function preload(){
    cute = loadImage("dog_cat.jpg")
    
 }
function gotResult(error,results){
if(error){
console.log(error)
}
else{
   console.log(results)
   objects = results
}

}
 function draw(){
    image(cute,0,0,640,420)
   if(status != ""){
for( i =0 ; i< objects.length ; i++){
   document.getElementById("status").innerHTML ="ObJeCtS aRe DeTEctEd"
p = floor(objects[i].confidence*100)
noFill ()
stroke ("Green ")
text(objects[i].label+ " "+p+" % ",objects[i].x,objects[i].y)
noFill ()
stroke ("red")
rect(objects[i].x-30,objects[i].y,objects[i].width,objects[i].height)
}
   }
 }
 

 