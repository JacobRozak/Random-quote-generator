var generate = document.getElementById('quote')

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


var random = Math.floor(Math.random()*(quotes.length))
console.log(random)
var chosen = document.createElement('h1')
chosen.textContent = quotes[random].q
generate.appendChild(chosen)
