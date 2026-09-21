function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href="#dashboard">Dashboard</a>
        </li>

        <li className="nav-item">
          <a href="#widgets">Widgets</a>
        </li>

        <li className="nav-item">
          <button aria-expanded="false">Apps</button>

          <ul className="sub-menu" aria-label="Apps">
            <li>
              <a href="#app-one">App One</a>
            </li>

            <li>
              <a href="#app-two">App Two</a>
            </li>

            <li>
              <a href="#app-three">App Three</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
