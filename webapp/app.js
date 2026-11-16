
/* Toast Notification */
function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}


/* Scroll to Booking */
function scrollToBooking() {
    const bookingForm = document.getElementById("booking");

    bookingForm.scrollIntoView({
        behavior: "smooth"
    });

    showToast("Please fill in the booking form!");
}


/* Hamburger Menu */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


/* Close Mobile Menu After Clicking a Link */
const navItems = document.querySelectorAll("#navLinks a");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


/* Team Filter */
const teamFilter = document.getElementById("teamFilter");
const matchCards = document.querySelectorAll(".match-card");
const noMatches = document.getElementById("noMatches");

teamFilter.addEventListener("change", function () {

    const selectedTeam = teamFilter.value;
    let visibleCount = 0;

    matchCards.forEach(function (card) {

        const teams = card.dataset.team.split(" ");

        if (selectedTeam === "All" || teams.includes(selectedTeam)) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }

    });

    noMatches.hidden = visibleCount !== 0;

});


/* Grid and List View */
const matchGrid = document.getElementById("matchGrid");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

gridBtn.addEventListener("click", function () {

    matchGrid.classList.remove("list-view");

    gridBtn.classList.add("active");
    listBtn.classList.remove("active");

});

listBtn.addEventListener("click", function () {

    matchGrid.classList.add("list-view");

    listBtn.classList.add("active");
    gridBtn.classList.remove("active");

});


/* Book Buttons */
const bookButtons = document.querySelectorAll(".book-btn");
const matchSelect = document.getElementById("matchSelect");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        matchSelect.value = button.dataset.match;

        updateSummary();

        scrollToBooking();

    });

});


/* Ticket Prices */
const prices = {
    "RCB vs CSK": {
        General: 800,
        Premium: 2000,
        VIP: 5000
    },

    "MI vs KKR": {
        General: 1000,
        Premium: 2500,
        VIP: 6000
    },

    "SRH vs RR": {
        General: 900,
        Premium: 2200,
        VIP: 5500
    }
};


/* Update Booking Summary */
const standSelect = document.getElementById("standSelect");
const ticketQuantity = document.getElementById("ticketQuantity");

function updateSummary() {

    const match = matchSelect.value;
    const stand = standSelect.value;
    const quantity = Number(ticketQuantity.value);

    const price = prices[match][stand];
    const total = price * quantity;

    document.getElementById("summaryMatch").textContent = match;
    document.getElementById("summaryStand").textContent = stand;
    document.getElementById("summaryQuantity").textContent = quantity;
    document.getElementById("summaryTotal").textContent = total;

}


/* Change Listeners */
matchSelect.addEventListener("change", updateSummary);
standSelect.addEventListener("change", updateSummary);
ticketQuantity.addEventListener("input", updateSummary);


/* Booking Form Submission */
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const match = matchSelect.value;
    const stand = standSelect.value;
    const quantity = Number(ticketQuantity.value);
    const name = document.getElementById("customerName").value;

    if (quantity < 1 || !Number.isInteger(quantity)) {
        showToast("Please enter a valid ticket quantity!");
        return;
    }

    /* Add Booking to My Bookings Table */
    const tableBody = document.getElementById("bookingTableBody");

    const row = document.createElement("tr");

    const matchCell = document.createElement("td");
    const standCell = document.createElement("td");
    const quantityCell = document.createElement("td");
    const nameCell = document.createElement("td");

    matchCell.textContent = match;
    standCell.textContent = stand;
    quantityCell.textContent = quantity;
    nameCell.textContent = name;

    row.appendChild(matchCell);
    row.appendChild(standCell);
    row.appendChild(quantityCell);
    row.appendChild(nameCell);

    tableBody.appendChild(row);

    document.getElementById("emptyBookings").style.display = "none";

    showToast("Booking confirmed successfully!");

    bookingForm.reset();

    updateSummary();

});


/* Initial Summary */
updateSummary();
