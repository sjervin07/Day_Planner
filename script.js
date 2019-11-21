const date = moment().format("dddd, MMMM Do")
console.log('date', date)

let element = document.getElementById('currentDay')
console.log(element)    

element.innerHTML = date

