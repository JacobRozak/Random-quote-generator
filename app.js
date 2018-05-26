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


generate.appendChild(chosenPerson)
generate.appendChild(chosenQuote)



