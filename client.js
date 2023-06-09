const { log } = require("console");
const net = require("net");
const { IP, PORT } = require('./constants')

const connect = function() {
  const conn = net.createConnection({ // this is a socket instance
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on("connect", () => {
    log("I'm in, let's goo!");
    setInterval(() => {
      conn.write("Name: AAA");

    }, 2000);

  });

  conn.on("data", (data) => {
    log("Received data: ", data);
  });

  return conn;
};

module.exports = { connect };