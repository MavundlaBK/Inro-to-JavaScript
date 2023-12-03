// for (var counter = 0; counter < 10; counter++){
//     console.log(counter + " Hello, JavaScrpt!");
// }

// for (var i = 10; i > 0; i--){
//     alert(i);

// }
// alert ("Blast off!");

// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];

// for (var i = 0; i < myFriends.length; i++){
//     alert(myFriends[i] + " is my friend.");
// }

// alert (Math.floor(Math.random() * ((1000 - 100) + 100)));


// var randomFriend = Math.floor(Math.random() * myFriends.length);
// alert(myFriends[randomFriend]);

//.......................................................................................


var days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
var weather = [
    "Sunny", "Partly Sunny", "Partly Cloudy",
    "Cloudy", "Raining", "Snowing", "Thunderstorm",
    "Foggy", "humid", "windy" 
];

var minTemp = 0;
var maxTemp = 100;

generateWeather();

function generateWeather(){
    for (var i = 0; i < days.length; i++){
        var weatherToday = weather[Math.floor(Math.random() * weather.length)];
        var tempToday = Math.floor(Math.random() * ((maxTemp - minTemp) + minTemp));

        document.getElementById("5DayWeather").innerHTML += "<div id ='" + days[i] + 
        "'class='" + weatherToday + "' ><b>Forcast for" + days[i] + ":</b><br>" +
        weatherToday + " and " + tempToday + " degrees. <br><br></div>";
    }
}

