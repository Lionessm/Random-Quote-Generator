// Array of quotes.
var quotes = [
    {
      quote: 'You educate a man; you educate a man. You educate a woman; you educate a generation.',
      source: 'Brigham Young',
      citation: null,
      year: null
    },
    {
      quote:'When a man gives his opinion, he is a man. When a woman gives her opinion, she is a bitch. ',
      source: 'Bette Davis',
      citation: null,
      year: null
    },

    {
      quote :'Men are afraid that women will laugh at them. Women are afraid that men will kill them.',
      source : 'Margaret Atwood',
      citation : null,
      year : null
    },

     {
      quote :'I know enough to know that no woman should ever marry a man who hated his mother.' ,
      source : 'Martha Gellhorn' ,
      citation : 'Selected Letters' ,
      year : 2006
     },

     {
      quote: 'The thing women have yet to learn is nobody gives you power. You just take it.' ,
      source : 'Roseanne Barr' ,
      citation : null ,
      year: null
     },

     {
      quote:'We teach girls to shrink themselves, to make themselves smaller. We say to girls, you can have ambition, but not too much. You should aim to be successful, but not too successful. Otherwise, you would threaten the man. Because I am female, I am expected to aspire to marriage. I am expected to make my life choices always keeping in mind that marriage is the most important. Now marriage can be a source of joy and love and mutual support but why do we teach girls to aspire to marriage and we don’t teach boys the same? We raise girls to see each other as competitors not for jobs or accomplishments, which I think can be a good thing, but for the attention of men. We teach girls that they cannot be sexual beings in the way that boys are.',
      citation: 'Chimamanda Ngozi Adiche' ,
      source: 'We Should All Be Feminists' ,
      year: 2014
     }

];

// Generates a random number between 0 and the quotes array length.
// Uses the generated number as an index to get a quote from the quotes array.
function getRandomQuote() {
    var quoteNumber = Math.floor(Math.random() * quotes.length);
    return quotes[quoteNumber];
 }

// Prints the random quotes.
function printQuote() {
     const quote = getRandomQuote();

     var output = document.getElementById("quote-box");

     if (quote['quote'] !== null){
        output.innerHTML = '<p class="quote">' + quote['quote'] + '</p>';
     }

     if (quote['source'] !== null){
        output.innerHTML += '<p class="source">' + quote['source'];
     }

     if (quote['citation'] !== null){
        output.innerHTML += '<span class="citation">' + quote['citation'] + '</span>';
     }

     if (quote['year'] !== null){
        output.innerHTML += '<span class="year">' + quote['year'] + '</span>';
     }

     output.innerHTML += '</p>';
}

printQuote();

// Generates a random color Hex.
function getRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

// Sets the background color of the body.
function setBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}
