
import { useState } from "react";

function BookingForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [match, setMatch] = useState("");
  const [tickets, setTickets] = useState(1);
  const [message, setMessage] = useState("");

  function handleBooking(e) {
    e.preventDefault();

    setMessage(
      `Thank you ${name}! Your booking request for ${match} with ${tickets} ticket(s) has been received.`
    );

    setName("");
    setEmail("");
    setMatch("");
    setTickets(1);
  }

  return (
    <section className="booking-section" id="booking">

      <h1>Book Your IPL Tickets</h1>
      <p>Fill in your details to request your tickets.</p>

      <form className="booking-form" onSubmit={handleBooking}>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Select Match</label>
        <select
          value={match}
          onChange={(e) => setMatch(e.target.value)}
          required
        >
          <option value="">Choose a match</option>
          <option value="CSK vs MI">CSK vs MI</option>
          <option value="RCB vs KKR">RCB vs KKR</option>
          <option value="SRH vs RR">SRH vs RR</option>
          <option value="DC vs PBKS">DC vs PBKS</option>
          <option value="GT vs LSG">GT vs LSG</option>
        </select>

        <label>Number of Tickets</label>
        <input
          type="number"
          min="1"
          max="10"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
          required
        />

        <button type="submit">
          Confirm Booking
        </button>

        {message && (
          <p className="success-message">{message}</p>
        )}

      </form>

    </section>
  );
}

export default BookingForm;
