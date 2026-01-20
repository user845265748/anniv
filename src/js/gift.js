const quoteElement = document.getElementById("quote");

const randomIndex = Math.floor(Math.random() * quotes.length);
quoteElement.textContent = quotes[randomIndex];