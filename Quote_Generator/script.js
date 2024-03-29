const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

const limitOfQuoteLength = 50;

let apiQuotes = [];

// Show New Quote
function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check If Author Field Is Blank
  if (!quote.author) {
    authorText.textContent = 'Unkown';
  } else {
    authorText.textContent = quote.author;
  }

  // Check Quote Length
  if (quote.text.length > limitOfQuoteLength) {
    quoteText.classList.add('long-quote');
  }
  quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Errors
  }
}

// On Load
getQuotes();
