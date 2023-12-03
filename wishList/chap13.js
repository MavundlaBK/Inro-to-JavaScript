var printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

var addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);
var wishList = document.getElementById("whishList")

var myList = [];
var myListArea = document.getElementById("whishList");


function addTheThing(){
    var theThing = document.getElementById("iWant");
    addToTheList(theThing);
    resetInput(theThing);
}

function printView(){
    var listPage = document.getElementById("listPage");
    var formArea = document.getElementById("formArea");

    formArea.style.display = "none";
    listPage.className = "print"
    myListArea.innerHTML = ""
    myList.sort();

    for (var i = 0; i < myList.length; i++){
        wishList.innerHTML += "<li>" + myList[i] + "</li>"
    }
    
    window.print();

}

function resetInput(inputToReset) {
    inputToReset.value = "";
}

function addToTheList(thingToAdd){
    myList.push(thingToAdd.value);
    var newListIteam = document.createElement("li");
    newListIteam.innerHTML = myList[myList.length - 1];

    myListArea.appendChild(newListIteam);
}
