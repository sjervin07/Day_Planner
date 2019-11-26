//Sets current date in Jumbotron

let date = moment().format("dddd, MMMM Do");
console.log("date", date);

let element = document.getElementById("currentDay");
console.log(element);

element.innerHTML = date;

//Adds in color coding for past/current/future time

$("div.row").each(function(index, element) {
  console.log(element);
  let hour = element.getAttribute("data-hour");
  let currentHour = moment().format("HH");
  if (hour === currentHour) {
    element.classList.add("present");
  } else if (currentHour > hour) {
    element.classList.add("past");
  } else if (currentHour < hour) {
    console.log(currentHour);
    console.log(hour);
    element.classList.add("future");
  }
});

//Local storage

let input = document.getElementsByClassName("description");
let save = document.getElementsByClassName("saveBtn");

$(".saveBtn").on("click", function(e){
    console.log(this.parentElement.getAttribute("data-hour"));
    var time = this.parentElement.getAttribute("data-hour");
    var text = this.parentElement.querySelector(".description").querySelector("textarea").value;
  
    localStorage.setItem(time,text);
    
})

for (var i = 9; i < 18; i++) {

  if (i == 9) {
    document.getElementById("textarea09").value= localStorage.getItem("09")
  }else{
    document.getElementById("textarea"+i).value= localStorage.getItem(i)
  }
}