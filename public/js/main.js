const chatForm = document.getElementById("chat-form");

const socket = io();

socket.on("message", (message) => console.log(message));

// Message Submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get message text
  const msg = e.target.elements.msg.value;

  // Emit a message to the server
  socket.emit("chatMessage", msg);
});
