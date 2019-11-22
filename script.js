//Sets current date in Jumbotron//

let date = moment().format("dddd, MMMM Do")
console.log('date', date)

let element = document.getElementById('currentDay')
console.log(element)    

element.innerHTML = date
//

let currentTime = moment();
console.log(currentTime)



let description = document.getElementsByClassName('description')

//Adding in past/current/future time color coding//

$("div.row").each(function(index, element){
    console.log(element);
let hour=element.getAttribute("data-hour");
let currentHour = moment().format("HH")
    if(hour===currentHour) {
        element.classList.add("present")

    }
    else if (currentHour > hour)
    {
        element.classList.add("past")
    }
    else if (currentHour < hour)
    {
        console.log(currentHour)
        console.log(hour)
        element.classList.add ("future")
    }
    
});



