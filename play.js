const {connect} = require("./client"); // import connect function from client.js file
const {setupInput} = require("./input"); // import setupInput from input.js file
console.log("Connecting ...");

connect(); // call connect to establish a network.
setupInput(); //call setupInput to establish a network.

