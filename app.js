

function myFunction(){



var generate = document.getElementsByClassName('newQuote')
//generate.addEventListener("click", function(){

var quote = document.getElementById('quote')

var quotes = [{
        id:1,
        quote : "“Dont cry because its over, smile because it happened.”", 
        author: "Dr. Seuss"
    },{
        id:2,
        quote : "“Be yourself; everyone else is already taken.” ", 
        author: "Oscar Wilde"
        },{
         id:3,
         quote : "“Always forgive your enemies; nothing annoys them so much.”", 
         author: "Oscar Wilde"
         
		},
		//enterprenership
        {
			quote: "If you make the Internet, live on the internet.",  
			author: "Matthew Mullenweg, WordPress"
		}, 
		
		{
			quote: "Find something you love and do it better than everyone else.",
			author: "Gurbaksh Chahal, RadiumOne"
		},

		{
			quote: "I find it best to dive right in and learn the hard way.",
			author: "Pete Cashmore, Mashable"
		},

		{
			quote: "If you do the things that are easier first, then you can actually make a lot of progress.",
			author: "Mark Zuckerberg, Facebook"
		},

		{
			quote: "A hard thing is done by figuring out how to start.",
			author: "Rand Fishkin, SEOmoz"
		},

		{
			quote: "To any entrepreneur: if you want to do it, do it now. If you don’t, you’re going to regret it.",
			author: "Catherine Cook, MyYearbook"
		},

		{
			quote: "Everything started as nothing.",
			author: "Ben Weissenstein, Grand Slam Garage Sales"
		},

		{
			quote: "I don’t have big ideas. I sometimes have small ideas, which seem to work out.",
			author: "Matt Mullenweg, WordPress"
		},

		{
			quote: "I think I was very naïve early on, but that also meant I didn’t know what couldn’t be done.",
			author: "Matt Mickiewicz, 99 Designs"
		},

		{
			quote: "It’s not about how many years of experience you have. It’s about the quality of your years of experience.",
			author: "Jacob Cass, Logo of the Day"
		},

		{
			quote: "Every single person I know who is successful at what they do is successful because they love doing it.",
			author: "Joe Penna, Mystery Guitar Man"
		},

		{
			quote: "My number one piece of advice is: you should learn how to program.",
			author: "Mark Zuckerberg, Facebook"
		},

		{
			quote: "Focusing on one thing and doing it really, really well can get you very far.",
			author: "Kevin Systrom, Instagram"
		},

		{
			quote: "Success is defined in units of fun. It’s all about being happy.",
			author: "Jake Nickell, Threadless"
		},
		{
			quote: "Solving specific problems is what drives me. I am not interested in having a career. I never have been.",
			author: "Sean Parker, Napster"
		},

		{
			quote: "I’m here to build something for the long-term. Anything else is a distraction.",
			author: "Mark Zuckerberg, Facebook"
		},

		{
			quote: "One can get anything if he is willing to help enough others get what they want.",
			author: "Zig Ziglar, Motivational Speaker"
		},

		{
			quote: "Brilliant thinking is rare, but courage is in even shorter supply than genius.",
			author: "Peter Thiel, Zero to One"
		},

		{
			quote: "All failed companies are the same: they failed to escape competition.",
			author: "Peter Thiel, Zero to One"
		},

		{
			quote: "Don't worry about failure; you only have to be right once.",
			author: "Drew Houston"
		},

		{
			quote: "As long as your going to be thinking anyway, think big.",
			author: "Donald Trump"
		},

		{
			quote: "Chase the vision, not the money; the money will end up following you.",
			author: "Tony Hsieh"
		},

		{
			quote: "Always deliver more than expected.",
			author: "Larry Page, Co-Founder, Google"
		},

		{
			quote: "If you’re not a risk taker, you should get the hell out of business.",
			author: "Ray Kroc, McDonald’s Founder"
		},

		{
			quote: "Ideas are commodity. Execution of them is not.",
			author: "Michael Dell, Dell Computers"
		},
		//books
		{
			quote: "There are five billion people living on this planet. But you fall in love with one particular person, and you won't swap her for any other.",
			author: "Jostein Gaarder, The Solitaire Mystery"
		},

		{
			quote: "People generally see what they look for and hear what they listen for.",
			author: "Harper Lee, To Kill a Mockingbird" 
		},

		{
			quote: "You don't get to choose if you get hurt in this world...but you do have some say in who hurts you.",
			author: "John Green, The Fault In Our Stars"
		},

		{
			quote: "The world is not a wish-granting factory",
			author: "John Green, The Fault In Our Stars"
		},

		{
			quote: "Destroying things is much easier than making them.",
			author: "Suzanne Collins, The Hunger Games"
		},

		{
			quote: "To be successful you need friends and to be very successful you need enemies.",
			author: "Sidney Sheldon, The Other Side of Midnight"
		},

		{
			quote: "Life is like a novel. It's filled with suspense. You have no idea what is going to happen until you turn the page.",
			author: "Sidney Sheldon"
		},

		{
			quote: "It's much better to do good in a way that no one knows anything about it.",
			author: "Leo Tolstoy, Anna Karenina"
		},

		{
			quote: "There comes a time when you have to choose between turning the page and closing the book.",
			author: "Josh Jameson"
		},

		{
			quote: "I think of life as a good book. The further you get into it, the more it begins to make sense.",
			author: "Harold Kushner"
		},

		{
			quote: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
			author: "Haruki Murakami"
		},

		{
			quote: "There are many little ways to enlarge your child’s world. Love of books is the best of all.",
			author: "Jacqueline Kennedy Onassis"
		},

		{
			quote: "Great books help you understand, and they help you feel understood.",
			author: "John Green"
		},

		{
			quote: "A book is a version of the world. If you do not like it, ignore it or offer your own version in return.",
			author: "Salman Rushdie"
		},

		{
			quote: "Keep reading books, but remember that a book is only a book, and you should learn to think for yourself.",
			author: "Maxim Gorky"
		},

		{
			quote: "There are perhaps no days of our childhood we lived so fully as those we spent with a favorite book.",
			author: "Marcel Proust"
		},

		{
			quote: "A book is the only place in which you can examine a fragile thought without breaking it.",
			author: "Edward P. Morgan"
		},

		{
			quote: "If one cannot enjoy reading a book over and over again, there is no use in reading it at all.",
			author: "Oscar Wilde"
		},

		{
			quote: "Read the best books first, or you may not have a chance to read them at all.",
			author: "Henry David Thoreau"
		},

		{
			quote: "Make it a rule never to give a child a book you would not read yourself.",
			author: "George Bernard Shaw"
		},

		{
			quote: "I can’t imagine a man really enjoying a book and reading it only once.",
			author: "C.S. Lewis"
		},

		{
			quote: "One always has a better book in one’s mind than one can manage to get onto paper.",
			author: "Michael Cunningham"
		},

		{
			quote: "There are worse crimes than burning books. One of them is not reading them.",
			author: "Joseph Brodsky"
		},

		{
			quote: "You know you’ve read a good book when you turn the last page and feel a little as if you have lost a friend.",
			author: "Paul Sweeney"
		},

		{
			quote: "A good book has no ending.",
			author: "R.D. Cumming"
		},


    ]

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
    //document.getElementById('quote-box').body.style.background-image = "url('http://source.unsplash.com/random/150x150')" ;
    //document.body.style.backgroundImage = "url(http://source.unsplash.com/random/700x700')"
}

var random = Math.floor(Math.random()*(quotes.length))

var randomQuote = quotes[random].quote
var randomPerson = quotes[random].author

//console.log(randomQuote)
//console.log(randomPerson)

var chosenPerson = document.createElement('h1')
chosenPerson.className = 'quote'
chosenPerson.textContent = randomQuote

var chosenQuote = document.createElement('h2')
chosenQuote.textContent = randomPerson
chosenQuote.className = 'person'


//quote.appendChild(chosenPerson)
//quote.appendChild(chosenQuote)

quote.innerHTML = '<h1 class="quote">'+ randomQuote + '</h1> '+
                  '<h2 class="person">'+ randomPerson + '</h2>'
changeColor()

}
window.onload = myFunction()