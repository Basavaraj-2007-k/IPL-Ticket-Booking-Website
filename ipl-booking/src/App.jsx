
import { useState } from "react";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import MatchCard from "./component/MatchCard";
import Footer from "./component/Footer";

import "./App.css";

function App() {

  const [matches] = useState([
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
      team2: "GT",
      venue: "Hyderabad",
      date: "20 April 2026",
      time: "3:30 PM"
    },
    {
      id: 4,
      team1: "RR",
      team2: "PBKS",
      venue: "Jaipur",
      date: "22 April 2026",
      time: "7:30 PM"
    }
  ]);

  return (
    <div>

      <Navbar />

      <Hero />

      <section className="matches-section" id="matches">

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

    </div>
  );
}

export default App;
