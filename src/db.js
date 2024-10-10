const fs = require('fs');
const path = require('path');

const quotesPath = path.resolve(__dirname, 'data/quotes-data.json');
const jsonString = fs.readFileSync(quotesPath);
const data = JSON.parse(jsonString);
const { quotes } = data; // object destructuring

// PUBLIC METHODS
const getAllQuotes = () => quotes;

const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

const recentQuote = () => quotes[quotes.length - 1];

const getQuoteById = (id = undefined) => {
  if (id === undefined) { return getAllQuotes(); }
  const checkID = (quote) => quote.id === id;
  let quote = quotes.find(checkID);
  if (!quote) {
    console.log(quote);
    quote = undefined;
    console.log(quote);
  }
  return quote;
};

module.exports = {
  getAllQuotes, randomQuote, recentQuote, getQuoteById,
};
