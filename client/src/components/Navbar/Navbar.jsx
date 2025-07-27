
import { assets } from "../../../assets/assets"
import './Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar() {


  document.getElementById("root").addEventListener('click', function() {
    document.getElementById("nav_links").classList.toggle('close');
  })
  function openMenu() {
    document.getElementById("nav_links").classList.toggle('open');
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
            <img src={assets.logo} alt="logo" height="70px" />
            <span>PRIESTHOOD FELLOWSHIP CHURCH WITEITHIE</span>
        </NavLink>
      </div>
      <ul className="nav-links" id="nav_links">
        <li><NavLink className="nav-link active" to="/">Home</NavLink></li>
        <li><NavLink className="nav-link" to="/updates">Updates</NavLink></li>
        <li><NavLink className="nav-link" to="/map">Map</NavLink></li>
      </ul>

      <div className="mobile-menu" role="button" onClick={() => openMenu()}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
