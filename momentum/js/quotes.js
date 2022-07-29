const quotes = [
  {
    quote: "It's really too late to think it's late.",
    author: "Myeong Soo Park",
  },
  {
    quote: "It's much better to be full than to be hungry.",
    author: "Myeong Soo Park",
  },
  {
    quote: "The more death and marriage are put off, the better.",
    author: "Myeong Soo Park",
  },
  {
    quote: "The price should be reduced.",
    author: "Myeong Soo Park",
  },
  {
    quote: "Anyway, it's right for the younger brother to do well.",
    author: "Myeong Soo Park",
  },
  {
    quote: "Mom and team leader can't be changed.",
    author: "Myeong Soo Park",
  },
  {
    quote: "The enemy meets at work.",
    author: "Myeong Soo Park",
  },
  {
    quote: "You have to live in a mess! There's only one life!",
    author: "Myeong Soo Park",
  },
  {
    quote: "I don't have a dream. I just want to play.",
    author: "Myeong Soo Park",
  },
  {
    quote: "Work in hot weather, work in cold weather, if you don't study now.",
    author: "Myeong Soo Park",
  },
  {
    quote: "There is an order to come, but there is no order to go.",
    author: "Myeong Soo Park",
  },
  {
    quote: "Be quiet and open your wallet if you're a senior.",
    author: "Myeong Soo Park",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `< ${todaysQuote.author} >`;
