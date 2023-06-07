const { log } = require("console");

const net = require("net");

const connect = function() {
  const conn = net.createConnection({ // this is a socket instance
    host: '165.227.47.243',
    port: '50541'
  });

  conn.setEncoding('utf8');

  conn.on("connect", () => {
    log("I'm in, let's goo!");
  });

  conn.on("data", (data) => {
    log("Received data: ", data);
  });

  return conn;
};

module.exports = { connect }