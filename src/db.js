const fs = require('fs');
const path = require('path');

const quotesPath = path.resolve(__dirname, 'data/quotes-data.json');
const jsonString = fs.readFileSync(quotesPath);
const data = JSON.parse(jsonString);
const { quotes } = data; // object destructuring

// PUBLIC METHODS
const getAllQuotes = () => quotes;

const randomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
};

const recentQuote = () => {
    return quotes[quotes.length - 1];
}

const getQuoteById = (id = undefined) => {
    if (id == undefined){return getAllQuotes();}
    const checkID = (quote) => {
        return quote.id == id;
      };
      let quote;
      if (!(quote = quotes.find(checkID))){
        console.log(quote);
        quote = undefined;
        console.log(quote);
      }
      return quote;
};

module.exports = { getAllQuotes, randomQuote, recentQuote, getQuoteById };
