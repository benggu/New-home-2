//put the path to your image in this variable!!!!
var trailImage="/butterfly.gif";






var trailSpeed=50;
var offSet=0;

window.onload = function() {
    var img_wrapper= document.createElement("div");
    img_wrapper.id="trail";
    img_wrapper.style="position:fixed;pointer-events: none";
    img_wrapper.innerHTML=`<img src="${trailImage}" width="50px">`;
    document.body.appendChild(img_wrapper);
    
    var trail = document.getElementById("trail");
    var mouseX=0;
    var mouseY=0;
    var scroll=0;
    var trailX=0;
    var trailY=0;

    trail.style.left=mouseX+"px";
    trail.style.top=mouseY+"px";
    trail.style.zIndex="100";
    window.addEventListener('mousemove', function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
        scroll=window.scrollY;
    });
    window.addEventListener('scroll', function(e){
        scroll=window.scrollY;
    });
    setInterval(function(){
        trailX+=(mouseX-trailX)/trailSpeed;
        trailY+=(mouseY-trailY)/trailSpeed;
        trail.style.left=(trailX) +'px';
        trail.style.top=(trailY-scroll)+'px';
        


        if(mouseX-trailX>0) trail.style.transform="scaleX(1)";
        else trail.style.transform="scaleX(-1)";
      },20);

};