events_list=[
    {month:1,day:1,message:"<img src='/assets/bob.webp'><br>Happy New Year! And happy birthday to Bob!"},
    {month:4,day:30,message:"<img src='/assets/tenna.gif'>Happy Birthday to Housepen herself!"}
]


monthnames=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
daynames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var today=new Date();
var monthstart=new Date(today.getFullYear(), today.getMonth(), 1)
var monthend=new Date(today.getFullYear(), today.getMonth()+1, 0)

var year=today.getFullYear();
var month=today.getMonth();
var monthname=monthnames[month];
var day=today.getDate();
var sday=today.getDay();

var startday=monthstart.getDay();



var calendar_table=document.getElementById("calendar-table");

document.getElementById("year").innerHTML=year;
document.getElementById("month").innerHTML=monthname;
document.getElementById("day").innerHTML=day;
document.getElementById("bigmonth").innerHTML=monthname;
var date_boxes=calendar_table.getElementsByTagName("td");
var end_date=monthend.getDate()
for(var i=0;i<=34;i++){
    date_boxes[i+7].innerHTML="-";
}
for(var i=0;i<end_date;i++){
    if(i+1==day){
        date_boxes[i+7+startday].classList.add("current_date");
    }
    date_boxes[i+7+startday].innerHTML=i+1;
}

for(var i in events_list){
    if(events_list[i].month==month+1 && events_list[i].day==day)
    {
        document.getElementById("calendar-message").innerHTML=events_list[i].message;
        break;
    }
}