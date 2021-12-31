import React from "react";
import {IoIosArrowForward } from "react-icons/io";
import { ImCross,ImNewspaper } from "react-icons/im";
import logo from "assets/images/e-valiy.png";
import icon from "assets/images/e-icon.png";
import bkash from "assets/images/bkash-icon.png";
import { Link } from "react-router-dom";
const Sidebar = ({sideBarActive, sideBarClick}) => {
    return (
        <div className="sideBarInner">
                  <div className={!sideBarActive ? "sideBarNone" : ""}>
                   <div className="sideBar">
                        <div className="top">
                      <Link to="/">
                        <img src={logo} alt="" />
                      </Link>
                      <button onClick={()=>sideBarClick(!sideBarActive)}>
                        <ImCross />
                      </button>
                    </div>
                    <div className="eLoginArea">
                      <ul>
                        <img src={icon} alt="" />
                        <p>Account</p>
                      </ul>
                    <div className="sideBarLogBtn">
                    <button>Login</button>
                    </div>
                    </div>
                    <div className="sideBarItems">
                      <Link to=""><div><span><ImNewspaper /></span><span>News Feed</span></div><span><IoIosArrowForward /></span></Link>
                      <Link to=""><div><span><ImNewspaper /></span><span>News Feed</span></div><span><IoIosArrowForward /></span></Link>
                      <Link to=""><div><span><ImNewspaper /></span><span>News Feed</span></div><span><IoIosArrowForward /></span></Link>
                      <Link to=""><div><span><ImNewspaper /></span><span>News Feed</span></div><span><IoIosArrowForward /></span></Link>
                    </div>
                    <div className="contract">
                      <div className="contractItems">
                        <img src={bkash} alt="" />
                        <div>
                          <p>Hotline</p>
                          <a href="tel:+">0187+++++++9</a>
                        </div>
                      </div>
                      <div className="contractItems">
                        <img src={bkash} alt="" />
                        <div>
                          <p>Bkash</p>
                          <a href="tel:+">0187+++++++9</a>
                        </div>
                      </div>
                      <div className="contractItems">
                        <img src={bkash} alt="" />
                        <div>
                          <p>Bkash</p>
                          <a href="tel:+">0187+++++++9</a>
                        </div>
                      </div>
                    </div>
                    {/* contract_end */}
                    <div className="someLink">
                      <Link to="/">. About Us .</Link>
                      <Link to="/"> Contact us</Link>
                      <Link to="/">  . Privacy Policy</Link>
                      <Link to="/">   . Purchasing Policy </Link>
                      <Link to="/"> .Cookie Policy</Link>
                      <Link to="/"> . Terms & Conditions</Link>
                      <Link to="/">  · Returns and Replacement</Link>
                    </div>
                    <p className="text-center mt-3">© e-valy.com {new Date().getFullYear()}</p>
                   </div>
                  </div>
                </div>
    );
};

export default Sidebar;