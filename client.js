const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function(data) {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT,// PORT number here,

  });
  //accept data input and sends it to the server
  conn.on("data", (data) => {
    console.log(data);
  });
  
  //to register a "connect" handler with the printed message
  conn.on("connect", () => {
    console.log("Successfully connected to game server"); // message to print when connected.
    conn.write("Name: Ike");   // send client's name "Ike" to serve
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};