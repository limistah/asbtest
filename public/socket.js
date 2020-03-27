let ws = null;

$(function() {
  // Only connect when username is available
  if (window.username) {
    startChat();
  }
  ws = adonis.Ws("ws:localhost:3001").connect();

  ws.on("open", () => {
    const bookings = ws.subscribe("booking");
    bookings.on("bookings", bookings => {
      console.log(bookigs);
      alert("New Booking");
    });
  });
  setTimeout(() => {
    ws.getSubscription("booking").emit("message");
  }, 1000);
});
