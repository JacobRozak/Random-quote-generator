//window.onload = function(){

function myFunction(){

var generate = document.getElementsByClassName('newQuote')
//generate.addEventListener("click", function(){

var quote = document.getElementById('quote')

var quotes = [{
        id:1,
        q : "“Dont cry because its over, smile because it happened.”", 
        person: "Dr. Seuss"
    },{
        id:2,
        q : "“Be yourself; everyone else is already taken.” ", 
        person: "Oscar Wilde"
        },{
         id:3,
         q : "“Always forgive your enemies; nothing annoys them so much.”", 
        person: "Oscar Wilde"
        }]

var colors = [
    "#00d8cd",
    "#f73cee",
    "#68de6f",
    "#5d43ee",
    "#026b00",
    "#fa00b4",
    "#feb783",
    "#6300a3",
    "#ae1100",
    "#0167bf",
    "#592600",
    "#cda2ff",
    "#2d1d4a",
    "#ff51b1",
    "#fcb0d4"
]

    function changeColor(){
    var randIx = Math.floor(Math.random() * colors.length);
    document.getElementsByTagName("body")[0].style.backgroundColor = colors[randIx];
}

var random = Math.floor(Math.random()*(quotes.length))

var randomQuote = quotes[random].q
var randomPerson = quotes[random].person

//console.log(randomQuote)
//console.log(randomPerson)

var chosenPerson = document.createElement('h1')
chosenPerson.className = 'quote'
chosenPerson.textContent = randomQuote

var chosenQuote = document.createElement('h2')
chosenQuote.textContent = randomPerson
chosenQuote.className = 'person'


quote.appendChild(chosenPerson)
quote.appendChild(chosenQuote)

changeColor()

}
