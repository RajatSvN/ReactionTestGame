var start = new Date().getTime();
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function makeShapeAndAppear() {
var size =  50 + Math.random()*150 ;
document.getElementById("shape").style.backgroundColor = getRandomColor() ;
document.getElementById("shape").style.width = size ;
document.getElementById("shape").style.height = size ;
document.getElementById("shape").style.marginLeft = Math.random()*800 ;
document.getElementById("shape").style.marginTop = Math.random()*500 ;
if((Math.floor(Math.random()*10))%3==0){
document.getElementById("shape").style.borderRadius = "50%" ;}
else{
document.getElementById("shape").style.borderRadius = "0%"}
document.getElementById("shape").style.display = "block";
start = new Date().getTime();
}
function appearAfterDelay(){

setTimeout(makeShapeAndAppear,500);//do not put makeShapeAndAppear() as argument setTimeout() i.e don't put the parenthesiss
}


document.getElementById("shape").onclick = function(){
document.getElementById("shape").style.display = "none";
var end = new Date().getTime();
var time = end - start;
document.getElementById("timeHere").innerHTML = "Your time is:" + time/1000 ;
appearAfterDelay();


}