import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1><span>Welcome to Priesthood fellowship</span> - A Home for all in Christ</h1>
        <button><Link clasName="btn" to="/map">Pay a visit</Link></button>
      </div>
    </header>
  )
}

export default Header;
