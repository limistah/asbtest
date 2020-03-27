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
      alert("Total Subscriptions:", bookings.length || "0");
    });
  });
  setTimeout(() => {
    ws.getSubscription("booking").emit("message");
  }, 1000);
});
