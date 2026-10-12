document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const location = document.getElementById("location").value.trim();

    const date = document.getElementById("date").value;

    const message = document.getElementById("message");

    if (!location || !date) {
      message.textContent = "Please enter your location and travel date.";
      return;
    }

    message.textContent =
      "Searching hotels in " + location + " for " + date + ".";
  });

document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("subscribeMessage").textContent =
      "Thank you for subscribing!";

    this.reset();
  });
