
/* Toast Notification */
function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 3000);
}


/* Get Booking Form Elements */
const match = document.getElementById("match");

const stand = document.getElementById("stand");

const tickets = document.getElementById("tickets");


/* Get Summary Elements */
const summaryMatch = document.getElementById("summaryMatch");

const summaryStand = document.getElementById("summaryStand");

const summaryTickets = document.getElementById("summaryTickets");

const summaryPrice = document.getElementById("summaryPrice");

const totalAmount = document.getElementById("totalAmount");


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
function updateSummary() {

    const selectedMatch = match.value;

    const selectedStand = stand.value;

    const quantity = Number(tickets.value);

    /* Check selections */
    if (selectedMatch === "" || selectedStand === "" ||
        quantity < 1 || quantity > 10 || !Number.isInteger(quantity)) {

        summaryMatch.textContent = selectedMatch || "Not Selected";

        summaryStand.textContent = selectedStand || "Not Selected";

        summaryTickets.textContent = quantity || 0;

        summaryPrice.textContent = 0;

        totalAmount.textContent = 0;

        return;
    }

    /* Calculate Price */
    const price = prices[selectedMatch][selectedStand];

    const total = price * quantity;

    /* Display Booking Details */
    summaryMatch.textContent = selectedMatch;

    summaryStand.textContent = selectedStand;

    summaryTickets.textContent = quantity;

    summaryPrice.textContent = price;

    totalAmount.textContent = total.toLocaleString("en-IN");

    /* Show Toast */
    showToast("Booking Summary Updated Successfully!");

}


/* Change Event Listeners */
match.addEventListener("change", updateSummary);

stand.addEventListener("change", updateSummary);

tickets.addEventListener("change", updateSummary);


/* Book Buttons */
const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        document.getElementById("booking").scrollIntoView({
            behavior: "smooth"
        });

        showToast("Please fill in the booking form!");

    });

});


/* Form Submission */
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    updateSummary();

    if (match.value === "" || stand.value === "" ||
        tickets.value === "" || Number(tickets.value) < 1 ||
        Number(tickets.value) > 10) {

        showToast("Please select valid booking details!");

        return;
    }

    showToast("Booking Confirmed Successfully!");

});


/* Reset Form */
bookingForm.addEventListener("reset", function () {

    setTimeout(function () {

        summaryMatch.textContent = "Not Selected";

        summaryStand.textContent = "Not Selected";

        summaryTickets.textContent = 0;

        summaryPrice.textContent = 0;

        totalAmount.textContent = 0;

    }, 0);

});
