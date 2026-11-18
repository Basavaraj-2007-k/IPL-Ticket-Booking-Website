
function BookingHistory({ bookings }) {
  return (
    <section className="history">
      <h1>My Booking History</h1>

      {bookings.length === 0 ? (
        <p>No bookings available yet.</p>
      ) : (
        bookings.map((booking, index) => (
          <div className="history-card" key={index}>
            <h3>{booking.match.team1} vs {booking.match.team2}</h3>

            <p>Customer: {booking.name}</p>
            <p>Tickets: {booking.tickets}</p>
            <p>Date: {booking.match.date}</p>
            <p>Stadium: {booking.match.stadium}</p>
          </div>
        ))
      )}
    </section>
  );
}

export default BookingHistory;
