
import Hero from "../components/Hero";

function Home({ onNavigate }) {
  return (
    <div>
      <Hero onExplore={() => onNavigate("matches")} />

      <section className="welcome">
        <h2>Welcome to IPL Ticket Booking</h2>

        <p>
          Find upcoming IPL matches and book your
          favourite team's tickets easily.
        </p>

        <button onClick={() => onNavigate("matches")}>
          View All Matches
        </button>
      </section>
    </div>
  );
}

export default Home;
