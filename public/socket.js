let ws = null;

$(function() {
  // Only connect when username is available
  if (window.username) {
    startChat();
  }
  ws = adonis.Ws("ws:localhost:3000").connect();

  ws.on("open", () => {
    const bookings = ws.subscribe("bookings");
    bookings.on("newBooking", bookings => {
      console.log(bookigs);
    });
  });
});
