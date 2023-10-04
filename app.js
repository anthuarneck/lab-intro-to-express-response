const express = require("express");
const app = express();

const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - Definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes, and signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/", (request, response) => {
  response.send("I love Express");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back");
  response.send("Hasta la vista, baby");
});

app.get("/batman", (request, response) => {
  response.send("To the Batmobile!");
});

app.get("/zeus", (request, response) => {
  response.send("Release the Kraken");
});

app.get("/james-bond", (request, response) => {
  response.send("the name is Bond, James Bond");
});

app.get("/frankenstein", (request, response) => {
  response.send("It's alive! It's alive");
});

app.get("/steve-mcgarrett", (request, response) => {
  response.send("Book 'em Danno!");
});

app.get("/jj-evans", (request, response) => {
  response.send("Dy-no-myte!");
});

app.get("/bruce-banner", (request, response) => {
  response.send("Don't make me angry");
});

app.get("/homer-simpson", (request, response) => {
  response.send("D'Oh");
});

app.get("/borg", (request, response) => {
  response.send("Resistance is futile");
});

app.get("/magic8", (request, response) => {
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  const randomResponse = magic8Responses[randomIndex];
  response.send(`<h1>${randomResponse}</h1>`);
});

app.listen(3003, () => {
  console.log("Listening for requests on port 3003");
});
