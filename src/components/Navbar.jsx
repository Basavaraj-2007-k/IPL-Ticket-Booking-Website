
function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <h2 className="logo">IPL<span> TICKETS</span></h2>

      <div className="nav-links">
        <button onClick={() => onNavigate("home")}>Home</button>
        <button onClick={() => onNavigate("matches")}>Matches</button>
        <button onClick={() => onNavigate("history")}>My Bookings</button>
      </div>
    </nav>
  );
}

export default Navbar;
