import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
// import Location from "../Location/Location";
import NavLinks from "../NavLinks/NavLinks";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <Location Url={true} /> */}
      <div className="wrapper">
        <div className="logo">
          <a href="">
            <h1>ECOMMY</h1>
          </a>
        </div>

        <div className="nav">
          <ul>
            <Dropdown text="Categories"></Dropdown>
            <NavLinks link="">Shipping/Payment</NavLinks>
            <NavLinks>Contact</NavLinks>
            <NavLinks>products</NavLinks>
          </ul>

          <div className="user">
            <div className="auth">
              <Button link={""} style={"ghost"}>
                Login
              </Button>
              <Button link={""}>Signup</Button>
            </div>
            <div className="user-auth">
              <div className="this-user">
                <div className="user">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
