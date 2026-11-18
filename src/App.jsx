
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Matches from "./pages/Matches";
import BookTicket from "./pages/BookTicket";
import BookingHistory from "./pages/BookingHistory";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [bookings, setBookings] = useState([]);

  function handleBook(match) {
    setSelectedMatch(match);
    setPage("booking");
  }

  function handleConfirm(booking) {
    setBookings([...bookings, booking]);

    alert("Your ticket booking is successful!");

    setPage("history");
  }

  function renderPage() {
    switch (page) {
      case "home":
        return <Home onNavigate={setPage} />;

      case "matches":
        return <Matches onBook={handleBook} />;

      case "booking":
        return (
          <BookTicket
            selectedMatch={selectedMatch}
            onConfirm={handleConfirm}
          />
        );

      case "history":
        return <BookingHistory bookings={bookings} />;

      default:
        return <Home onNavigate={setPage} />;
    }
  }

  return (
    <div className="app">
      <Navbar onNavigate={setPage} />

      <main>
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
