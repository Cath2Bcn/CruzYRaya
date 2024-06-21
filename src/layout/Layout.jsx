import Footer from './Footer.jsx'
import Header1 from "./Header1.jsx";
import HeaderGame from "./HeaderGame.jsx";
import { Outlet, Link } from "react-router-dom";

export default function Layout () {

  return (
    <>
      <Header1 />

      <nav style={{ backgroundColor: "#333", padding: "10px" }}>
        <Link to="/CYRMockUp" style={{ color: "#fff", textDecoration: "none", padding: "10px"}}>
          MockUp
        </Link>

        <Link to="/home" style={{ color: "#fff", textDecoration: "none", padding: "10px"}}>
          Game
        </Link>

        <a style={{ color: "#fff", textDecoration: "none", padding: "10px"}}>
          Exit
        </a>
      </nav>
      
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "50px",
          marginBottom: "10px",
        }}
      >
          <HeaderGame />
          
          <div>
            <Outlet />
          </div>
          
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

