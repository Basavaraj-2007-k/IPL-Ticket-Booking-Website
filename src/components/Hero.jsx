
function Hero({ onExplore }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Experience the Thrill of IPL!</h1>

        <p>
          Watch your favourite teams compete.
          Book your IPL match tickets today!
        </p>

        <button onClick={onExplore}>
          Explore Matches
        </button>
      </div>
    </section>
  );
}

export default Hero;
