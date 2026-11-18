
function MatchCard({ match, onBook }) {
  return (
    <div className="match-card">
      <h3>{match.team1} vs {match.team2}</h3>

      <p>🏟️ Stadium: {match.stadium}</p>
      <p>📅 Date: {match.date}</p>
      <p>⏰ Time: {match.time}</p>

      <button onClick={() => onBook(match)}>
        Book Tickets
      </button>
    </div>
  );
}

export default MatchCard;
