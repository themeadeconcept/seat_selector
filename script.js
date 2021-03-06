const container = document.querySelector(".container");
// This will grab all seats in the row that aren't occupied
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

// + will turn value into a number
let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // Will store the length of the node list (class that is toggled)
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// movie select event - listen for "change" which is the option
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// seat click event

// adds an event listener for anything in the container that is clicked
container.addEventListener("click", (e) => {
  // checks if the element clicked has a class of seat but not a class of occupied
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    // adds the click and removes it on a click
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
