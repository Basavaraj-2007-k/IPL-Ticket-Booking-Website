

function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}


function scrollToBooking() {
    const bookingForm = document.getElementById("booking");

    bookingForm.scrollIntoView({
        behavior: "smooth"
    });

    showToast("Please fill in the booking form!");
}


const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function (button) {
    button.addEventListener("click", scrollToBooking);
});
