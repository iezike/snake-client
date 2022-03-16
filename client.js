const net = require("net");

// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: "165.227.47.243" , // IP address here,
    port: 50541,// PORT number here,

  });
  //accept data input and sends it to the server
  conn.on("data", (data) => {
    console.log(data);
  })
  
  //to register a "connect" handler with the printed message
  conn.on("connect", () => {
    console.log("Successfully connected to game server"); // message to print when connected.
    conn.write("Name: Ike");   // send client's name "Ike" to serve
    conn.write("Move: up") // move up one square (unless facing down)
    // conn.write("Move: down") // move down one square (unless facing up)
    // conn.write("Move: left") //move left one square (unless facing right)
    // conn.write("Move: right") //move left one square (unless facing left)
    // setTimeout( () => conn.write("Move: up"), 3000);
    // setInterval( () => conn.write("Move: up"), 50);
  })



  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect}