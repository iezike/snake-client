const { stdout } = require("process");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;
  setTimeout(() => connection.write("Say: EI"), 2000);
  return stdin;
};



// \u0003 maps to ctrl+c input
const handleUserInput = function(key) {
  if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  }
  if (key === '\u0003') {
    process.exit();
  }
};





module.exports = {setupInput};