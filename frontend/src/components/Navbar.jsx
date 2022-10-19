import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContex";
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };

  return (
    <nav className="navbar-c ">
      <div className="container">
        <div className="nav-container">
          <div className="left-container">
            <div className="navbar-brand">
              <a href="">XENONSTACK</a>
            </div>
          </div>
          <div className="right-container">
            {/* <span>{user.email}</span> */}

            <div className="contact-btn">
              <a href="">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
