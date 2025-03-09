// const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "Jully",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ];

// const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const giveaway = document.querySelector(".giveaway");
// const deadline = document.querySelector(".deadline ");
// const items = document.querySelectorAll(".deadline-formate h4");

// //object creation

// const fDate = new Date("2025-06-15T00:00:00Z");//future date

// const year = fDate.getFullYear();

// const hours = fDate.getHours();
// const minutes = fDate.getMinutes();

// let month = fDate.getMonth();
// month = months[month] //array = arrays[]

// const weekday = weekdays[fDate.getDate()];


// const date = fDate.getDate();

// giveaway.textContent = "Giveaway Start on "+date+" , "+month+' , '+year;

// const futureTime = fDate.getTime();

// function getRemTime(){
//     const today = new Date().getTime();

//     const t = futureTime - today;
//     //1s = 1000ms
//     //1m = 60s
//     //1hr = 60min
//     //1d = 24hr

//     const oneDay = 24 * 60 * 60 * 1000; //in millisec
//     const oneHour = 60 * 60 * 1000;
//     const oneMinute = 60 * 1000;

//     let days = t / oneDay;
//     days = Math.floor(days);

//     let hours = Math.floor(t % oneDay)/oneHour;
//     let minutes = Math.floor(t % oneHour)/oneMinute;
//     let seconds = Math.floor(t % oneMinute)/1000;


//     //set values

//     const value = [days, hours, minutes, seconds];
//     function format(item){
//         if(item<10){
//             return (item = '0${item}');
//         }
//         return item;
//     }
//     items.forEach(function(item,index){
//         item.innerHTML = format(value[index]);
//     });

//     if(t<0){
//         clearInterval(countdown);
//         deadline.innerHTML = "<h4 class='expired'>Sorry , this giveaway exprired...</h4>";
//     }
// }

// //countdown

// let countdown = setInterval(getRemTime, 1000);
// getRemTime();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "Jully",
    "August",
    "September",
    "October",
    "November",
    "December"
];


const days = [ 
    "Sunday",
    "Monday",
    "TuesDay",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

let givAwayDate = new Date(2097, 2, 12, 23, 30, 30);
// let localDate = currDate.toDateString();


let hr = givAwayDate.getHours();
console.log(hr)
let amPm = "AM";
if(hr >= 12){
    amPm = "PM";
    hr = hr - 12;


}

let givAway = document.querySelector('.giveaway')
givAway.innerHTML = ` Giveaway Ends on ${days[givAwayDate.getDay()]} , ${givAwayDate.getDate()} ${months[givAwayDate.getMonth()]}, ${givAwayDate.getFullYear()}, ${givAwayDate.getHours()}:${givAwayDate.getMinutes()} ${amPm}`

const updateFun = () =>{ 

let CurrDate = new Date();
let miliSec = givAwayDate - CurrDate;
console.log(miliSec)

let days = document.querySelector('.days')
days.innerHTML = Math.floor(miliSec/(24*60*60*1000)).toString().padStart(2, "0")

let hours = document.querySelector('.hours')
hours.innerHTML = Math.floor((miliSec % (24*60*60*1000))/(60*60*1000)).toString().padStart(2, "0")                


let minutes = document.querySelector('.minutes')
minutes.innerHTML = Math.floor((miliSec% (60*60*1000))/(60*1000)).toString().padStart(2, "0")


let seconds = document.querySelector('.seconds')
seconds.innerHTML = Math.floor((miliSec%(60*1000))/1000).toString().padStart(2, "0")
}

setInterval(updateFun, 1000)




