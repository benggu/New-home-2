function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

boxes=[
    {class:'deltarune-box',link:"#",html:"<h2>the Deltarune section</h2><p>A small subsection of this site dedicated to hit indie game Deltarune.</p>"},
    {class:'writings-box',link:"#",html:"<h2>writings</h2><p>Where I talk about things nobody wants to listen to.</p><p>Come check it out:</p>"},
    {class:'gallery-box',link:"#",html:"<h2>gallery</h2><p>Images collected from various places....</p>"},
    {class:'gameroom-box',link:"#",html:"<h2>gameroom</h2><p>Play games! Play fun games. Play them. Play them now.</p>"},
    {class:'resources-box',link:"#",html:"<h2>resources</h2><p>There are many resources. Very many. Take them. Take them with you.</p>"}
];

var number1=randint(0,boxes.length-1);
var number2=((number1)+randint(1,boxes.length-2))%boxes.length;

var box1=document.getElementById("box1");
var box2=document.getElementById("box2");

box1.innerHTML=boxes[number1].html+"<p><a class='button' href='"+boxes[number1].link+"'>take me there</a></p>";
box1.classList.replace("writings-box",boxes[number1].class);

box2.innerHTML=boxes[number2].html+"<p><a class='button' href='"+boxes[number2].link+"'>take me there</a></p>";
box2.classList.replace("gallery-box",boxes[number2].class);