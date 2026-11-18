
import { useState } from "react";

function BookingForm({ match, onConfirm }) {
  const [name, setName] = useState("");
  const [tickets, setTickets] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || tickets < 1) {
      alert("Please enter valid booking details");
      return;
    }

    onConfirm({
      name,
      tickets: Number(tickets),
      match
    });

    setName("");
    setTickets(1);
  }

  return (
    <div className="booking-form">
      <h2>Book Your Tickets</h2>

      <h3>{match.team1} vs {match.team2}</h3>

      <form onSubmit={handleSubmit}>
        <label>Customer Name</label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

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
      </form>
    </div>
  );
}

export default BookingForm;
