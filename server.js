const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Welcome current user
io.on("connection", (socket) => {
  socket.emit("message", "welcome to digeon!");

  //Broadcast when a user connects
  socket.broadcast.emit("message", "a user has joined the chat");

  //Broadcast when client disconnects
  socket.on("disconnect", () => {
    io.emit("message", "a user has left the chat");
  });
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Process running on port ${PORT}`));
