
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function BookingHistory() {
  return (
    <>
      <Navbar />

      <section className="booking-history">
        <h1>My Bookings</h1>

        <p>Your booking history will appear here.</p>

        <p>No bookings available yet.</p>
      </section>

      <Footer />
    </>
  );
}

export default BookingHistory;
