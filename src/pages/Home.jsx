
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="about">
        <h1>Welcome to IPL 2026</h1>
        <p>
          Experience the excitement of IPL cricket.
          Book your favourite team's tickets online!
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Home;
