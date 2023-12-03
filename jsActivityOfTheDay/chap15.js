// var myDay = prompt("Enter your favorate day of the week!");
// var theResponse;

// switch (myDay){
//     case "Monday":
//         theResponse = "Ack!";
//         break;
//     case "Tuesday":
//         theResponse = "Taco day!";
//         break;
//     case "Wednesday":
//         theResponse = "Halfway ther!";
//         break;
//     case "Thursday":
//         theResponse = "Its a new Friday!";
//         break;
//     case "Friday":
//         theResponse = "TGIF! Yeah!";
//         break;
//     case "Saturday":
//         theResponse = "What a day!";
//         break;
//     case "Sunday":
//         theResponse = "Fun day!";
//         break;
//     default:
//         theResponse = "I havent heard of that one!";
//         break;
// }

// prompt(theResponse);

// var myDate = new Date();
// alert(myDate);
// alert(myDate.getMonth());
// alert(myDate.getFullYear());

// var myNewDate = new Date();
// alert(myNewDate.setMonth(7));
// alert(myNewDate);

var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// // create a new Date object
var d = new Date();

// call the displayDate() function
displayDate();

function displayDate (){
// todo: display the current date in the todaysdate div 

todayDate.innerHTML = d.toDateString();
   
}

function displayActivity() {
    // todo: find out the day of the week
    var dayOfWeek = d.getDay();

    /* todo: set a variable, called youShould, with a
different string based on what day of the
week it is. */

var youShould;

switch (dayOfWeek){
    case 0:
        youShould = "Take it easy you've earned it!";
        break;
    case 1:
        youShould = "How about learning how to code";
        break;
    case 2:
        youShould = " You could do with an excersise today";
        break;
    case 3:
        youShould = "Learn coding some more";
        break;
    case 4:
        youShould = "Practice what you have learned yesterday";
        break;
    case 5:
        youShould = "Read a book";
        break;
    case 6:
        youShould = " Aaaaah excersise, read and code some  more";
        break;
    default:
        youShould = "Hmmm. Something has gone wrong";
}


 // todo: output the value of youShould into the thingToDo div

document.getElementById("thingToDo").innerHTML = youShould;

}
