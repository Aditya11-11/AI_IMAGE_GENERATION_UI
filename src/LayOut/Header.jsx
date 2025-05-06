import { useEffect, useState } from "react";
import "./Header.css"; // Make sure you have this CSS file for styling
import { Link } from "react-router-dom";

function Header({ toggleSidebar }) {
  const [name, setName] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("name");
    setName(user);
  }, []);

  return (
    <nav className="navbar">
      <button onClick={toggleSidebar} className="toggle-button" style={{marginLeft:"10px"}}>
        ☰
      </button>
      <div className="user-info">
        {name && <h5>Welcome, {name}!</h5>}
        <Link to="/login">
          <button className="logout-button" style={{marginRight:"10px", background:"black", height:"30px"}}>Sign in</button>
        </Link>
        <Link to="/login">
          <button className="logout-button fw-bold " style={{marginRight:"10px" , background:"white", color:"black",}}>Get Started</button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
