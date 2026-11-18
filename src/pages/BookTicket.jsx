
import BookingForm from "../components/BookingForm";

function BookTicket({ selectedMatch, onConfirm }) {
  if (!selectedMatch) {
    return <h2>Please select a match first.</h2>;
  }

  return (
    <section className="book-ticket">
      <BookingForm
        match={selectedMatch}
        onConfirm={onConfirm}
      />
    </section>
  );
}

export default BookTicket;
