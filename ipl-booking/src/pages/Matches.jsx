
import Navbar from "../component/Navbar";
import MatchCard from "../component/MatchCard";
import Footer from "../component/Footer";

function Matches() {

  const matches = [
    {
      id: 1,
      team1: "CSK",
      team2: "MI",
      venue: "Chennai",
      date: "15 April 2026",
      time: "7:30 PM"
    },
    {
      id: 2,
      team1: "RCB",
      team2: "KKR",
      venue: "Bengaluru",
      date: "18 April 2026",
      time: "7:30 PM"
    },
    {
      id: 3,
      team1: "SRH",
      team2: "RR",
      venue: "Hyderabad",
      date: "20 April 2026",
      time: "3:30 PM"
    }
  ];

  return (
    <>
      <Navbar />

      <section id="matches">
        <h1>Upcoming IPL Matches</h1>

        <div className="matches-container">
          {matches.map((match) => (
            <MatchCard
              key={match.id}
              team1={match.team1}
              team2={match.team2}
              venue={match.venue}
              date={match.date}
              time={match.time}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Matches;
