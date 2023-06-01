import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header1">
        <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                <li className="nav-item">
                  <a className="nav-link active header1text" aria-current="page" href="#">
                    Personal
                  </a>
                </li>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                <li className="nav-item ">
                  <a className="nav-link active header1text" aria-current="page" href="#">
                  Business
                  </a>
                  
                </li>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <img src="Assests/e-1.png" alt="" />
                  </a>
                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container">
            <Link to="/" className="navbar-brand" href="#">
              <img src="Assests/ufonelogo.png" alt="UfonePakistan" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                  
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Support
                  </a>
                  
                  <ul className="dropdown-menu">
                
                  <li>
                      <a className="dropdown-item tutorial" href="#">
                      Online Tutorial (Ufone)

                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                      Recharge via Ufone Web

                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                      Buy Super Card via Ufone <br /> Web

                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                      Recharge via My Ufone


                      </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                    Buy Super Card via My <br /> Ufone



                      </a>


                    </li>
                    
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/myufone" className="nav-link active" aria-current="page" href="#">
                    My Ufone
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/recharge" className="nav-link active" aria-current="page" href="#">
                    Online Recharge
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/newsim" aria-current="page" href="#">
                    Buy Sim
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Complaints
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                      Complaint History
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                      Payment Complaint
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                      Network Complaint
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                      Billing Complaint
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                      Bill Delivery Complaint
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    UPaisa
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="inputsearch me-2"
                  type="search"
                  placeholder="Enter your search "
                  aria-label="Search"
                />
                <a className=" btn-outline-success" type="submit">
                  <BsSearch className="mt-2" size={22} color="black" />
                </a>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <BsFacebook
                  className="facebook"
                  size={29}
                  color="#F27D18"
                />{" "}
                &nbsp;&nbsp;&nbsp;
                <AiFillTwitterCircle
                  className="facebook"
                  size={34}
                  color="#F27D18"
                />{" "}
                &nbsp;&nbsp;&nbsp;
                <AiFillInstagram
                  className="facebook"
                  size={35}
                  color="#F27D18"
                />{" "}
                &nbsp;&nbsp;&nbsp;
                <TfiYoutube className="facebook" size={30} color="#F27D18" />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
