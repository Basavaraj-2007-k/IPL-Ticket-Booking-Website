
/* Toast Notification */
function showToast(message) {
    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}


/* Scroll to Booking Section */
function scrollToBooking() {
    const bookingSection =
        document.getElementById("booking") ||
        document.getElementById("bookingForm");

    if (bookingSection) {
        bookingSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


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


/* Get Booking Form Elements */
const matchSelect = document.getElementById("matchSelect");
const standSelect = document.getElementById("standSelect");
const ticketQuantity = document.getElementById("ticketQuantity");
const bookingForm = document.getElementById("bookingForm");


/* Update Booking Summary */
function updateSummary() {

    const selectedMatch = matchSelect.value;
    const selectedStand = standSelect.value;
    const quantity = Number(ticketQuantity.value);

    const summaryMatch = document.getElementById("summaryMatch");
    const summaryStand = document.getElementById("summaryStand");
    const summaryQuantity = document.getElementById("summaryQuantity");
    const summaryPrice = document.getElementById("summaryPrice");
    const summaryTotal = document.getElementById("summaryTotal");

    if (
        !selectedMatch ||
        !selectedStand ||
        !Number.isInteger(quantity) ||
        quantity < 1 ||
        quantity > 10 ||
        !prices[selectedMatch] ||
        !prices[selectedMatch][selectedStand]
    ) {
        summaryMatch.textContent = selectedMatch || "Not Selected";
        summaryStand.textContent = selectedStand || "Not Selected";
        summaryQuantity.textContent = quantity || 0;
        summaryPrice.textContent = 0;
        summaryTotal.textContent = 0;
        return;
    }

    const price = prices[selectedMatch][selectedStand];
    const total = price * quantity;

    summaryMatch.textContent = selectedMatch;
    summaryStand.textContent = selectedStand;
    summaryQuantity.textContent = quantity;
    summaryPrice.textContent = price.toLocaleString("en-IN");
    summaryTotal.textContent = total.toLocaleString("en-IN");
}


/* Booking Form Change Events */
matchSelect.addEventListener("change", updateSummary);
standSelect.addEventListener("change", updateSummary);
ticketQuantity.addEventListener("input", updateSummary);


/* Hamburger Menu */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

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
}


/* Team Filter */
const teamFilter = document.getElementById("teamFilter");
const matchCards = document.querySelectorAll(".match-card");
const noMatches = document.getElementById("noMatches");

if (teamFilter) {

    teamFilter.addEventListener("change", function () {

        const selectedTeam = teamFilter.value;
        let visibleCount = 0;

        matchCards.forEach(function (card) {

            const teams = (card.dataset.team || "").split(" ");

            if (
                selectedTeam === "All" ||
                teams.includes(selectedTeam)
            ) {
                card.style.display = "";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (noMatches) {
            noMatches.hidden = visibleCount !== 0;
        }
    });
}


/* Grid and List View */
const matchGrid = document.getElementById("matchGrid");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

if (matchGrid && gridBtn && listBtn) {

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
}


/* Book Buttons */
const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        matchSelect.value = button.dataset.match;

        updateSummary();
        scrollToBooking();

        showToast("Please fill in the booking form!");
    });
});


/* Booking Form Submission */
bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const match = matchSelect.value;
    const stand = standSelect.value;
    const quantity = Number(ticketQuantity.value);

    const nameInput = document.getElementById("customerName");
    const name = nameInput ? nameInput.value.trim() : "Guest";

    if (!match || !stand) {
        showToast("Please select a match and ticket category!");
        return;
    }

    if (
        !Number.isInteger(quantity) ||
        quantity < 1 ||
        quantity > 10
    ) {
        showToast("Please enter between 1 and 10 tickets!");
        return;
    }

    const price = prices[match]?.[stand];

    if (!price) {
        showToast("Invalid match or ticket category!");
        return;
    }

    /* Add Booking to My Bookings Table */
    const tableBody = document.getElementById("bookingTableBody");

    if (tableBody) {

        const row = document.createElement("tr");

        const matchCell = document.createElement("td");
        const standCell = document.createElement("td");
        const quantityCell = document.createElement("td");
        const nameCell = document.createElement("td");

        matchCell.textContent = match;
        standCell.textContent = stand;
        quantityCell.textContent = quantity;
        nameCell.textContent = name || "Guest";

        row.appendChild(matchCell);
        row.appendChild(standCell);
        row.appendChild(quantityCell);
        row.appendChild(nameCell);

        tableBody.appendChild(row);

        const emptyBookings = document.getElementById("emptyBookings");

        if (emptyBookings) {
            emptyBookings.style.display = "none";
        }
    }

    showToast("Booking Confirmed Successfully!");

    bookingForm.reset();
    updateSummary();
});


/* Reset Form */
bookingForm.addEventListener("reset", function () {

    setTimeout(function () {
        updateSummary();
    }, 0);
});


/* Initial Booking Summary */
updateSummary();
