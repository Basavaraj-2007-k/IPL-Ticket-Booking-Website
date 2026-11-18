
import { useState } from "react";

function MatchCard({ team1, team2, venue, date, time }) {

  const [booked, setBooked] = useState(false);

  return (
    <div className="match-card">

      <h2>{team1} vs {team2}</h2>

      <p>📍 Venue: {venue}</p>
      <p>📅 Date: {date}</p>
      <p>⏰ Time: {time}</p>

      <button onClick={() => setBooked(true)}>
        {booked ? "Booked ✓" : "Book Now"}
      </button>

    </div>
  );
}

export default MatchCard;
