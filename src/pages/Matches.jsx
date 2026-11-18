
import MatchCard from "../components/MatchCard";

const matches = [
  {
    id: 1,
    team1: "Chennai Super Kings",
    team2: "Mumbai Indians",
    stadium: "MA Chidambaram Stadium",
    date: "20 April 2027",
    time: "7:30 PM"
  },
  {
    id: 2,
    team1: "Royal Challengers Bengaluru",
    team2: "Kolkata Knight Riders",
    stadium: "M. Chinnaswamy Stadium",
    date: "22 April 2027",
    time: "7:30 PM"
  },
  {
    id: 3,
    team1: "Rajasthan Royals",
    team2: "Punjab Kings",
    stadium: "Sawai Mansingh Stadium",
    date: "24 April 2027",
    time: "3:30 PM"
  },
  {
    id: 4,
    team1: "Sunrisers Hyderabad",
    team2: "Delhi Capitals",
    stadium: "Rajiv Gandhi Stadium",
    date: "26 April 2027",
    time: "7:30 PM"
  }
];

function Matches({ onBook }) {
  return (
    <section className="matches">
      <h1>Upcoming IPL Matches</h1>

      <div className="match-container">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            onBook={onBook}
          />
        ))}
      </div>
    </section>
  );
}

export default Matches;
