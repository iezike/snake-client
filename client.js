const net = require("net");

// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: "165.227.47.243" , // IP address here,
    port: 50541,// PORT number here,,

  });
  //accept data input and sends it to the server
  conn.on("data", (data) => {
    console.log(data);
  })
  
  //to register a "connect" handler with the printed message
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Ike");
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect}