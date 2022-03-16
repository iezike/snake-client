const { stdout } = require("process");

let connection;

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume(); 
  stdin.on("data", handleUserInput);
  connection = conn;
  return stdin;
};



// \u0003 maps to ctrl+c input
const handleUserInput = function (key) {
  if (key === "w") {
    connection.write("Move: up");
  } else if(key === "a") {
    connection.write("Move: left")
  } else if(key === "s") {
    connection.write("Move: down")
  } else if(key === "d") {
    connection.write("Move: right")
  }
  if (key === '\u0003') {
    process.exit();
  }
};

// // Map Movements to keyboard keys w, a , s and d
// const userMovementKeys = function (key) {
//   if (key === "w") {
//     console.log("Move: up");
//   } else if(key === "a") {
//     console.log("Move: left")
//   } else if(key === "s") {
//     console.log("Move: down")
//   } else if(key === "d") {
//     console.log("Move: right")
//   }
// };


// Stores the active TCP connection object.















// connection.on("connect", () => {
//   connection.write("Move: up") 
  
//   // move up one square (unless facing down)
//   // conn.write("Move: down") // move down one square (unless facing up)
//   // conn.write("Move: left") //move left one square (unless facing right)
//   // conn.write("Move: right") //move left one square (unless facing left)
//   // setTimeout( () => conn.write("Move: up"), 3000);
//   // setInterval( () => conn.write("Move: up"), 50);
// })
module.exports = {setupInput};