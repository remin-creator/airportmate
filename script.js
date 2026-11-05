const flightSearchForm = document.getElementById("flight-search");
const flightNumberInput = document.getElementById("flight-number");
const searchMessage = document.getElementById("search-message");
const flightResult = document.getElementById("flight-result");

flightSearchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Normalize input so "am101" and "AM 101" also work.
  const flightNumber = flightNumberInput.value
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "");

  flightResult.hidden = true;

  if (!flightNumber) {
    searchMessage.textContent = "Please enter a flight number.";
    return;
  }

  flightNumberInput.value = flightNumber;

  if (flightNumber === "AM101") {
    flightResult.hidden = false;

    searchMessage.textContent =
      "Sample flight found. All details below are demonstration data.";
  } else {
    searchMessage.textContent =
      "No demo flight found for " +
      flightNumber +
      ". Try AM101.";
  }
});

// Clear the previous result when the user changes the search.
flightNumberInput.addEventListener("input", function () {
  flightResult.hidden = true;
  searchMessage.textContent = "";
});
