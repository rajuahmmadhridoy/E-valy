import React, { useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { BsThreeDots, BsPhone, BsBagFill, BsBag } from "react-icons/bs";
import { BiChat, BiPhoneCall, BiMessage } from "react-icons/bi";
import { AiTwotoneMail } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { IoMdNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import logo from "assets/images/e-valiy.png";
import icon from "assets/images/e-icon.png";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
const Header = () => {
  const [catActive, setCatActive] = useState(false);
  const [sideBarActive, setSideBarActive] = useState(false);
  const categoriesClick = () => {
    setCatActive(!catActive);
  };
  const sideBarClick = (setSideBar) => {
    setSideBarActive(setSideBar);
  };
  // document.addEventListener('click', setActive(false));
  console.log(catActive);
  return (
    <div className="header_component">
      <div className="mobileNav">
        <Container>
          <div className="mobileNavTop d-flex justify-content-between align-items-center">
            {" "}
            <button onClick={() => sideBarClick(!sideBarActive)}>
              {" "}
              <GoThreeBars />
            </button>
            <img className="logo" src={logo} alt="" />
            <FaUser />
          </div>
          {sideBarActive && (
            <Sidebar
              sideBarClick={sideBarClick}
              sideBarActive={sideBarActive}
            />
          )}
          <InputGroup className="mb-3">
            <FormControl
              placeholder="search for"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="outline-primary bg-primary text-white"
              id="button-addon2"
            >
              Button
            </Button>
          </InputGroup>
        </Container>
      </div>
      <div className="mobileNavBottomSection">
        <Container>
          <div className="mobileNavBottom d-flex justify-content-between align-items-center">
            <Link to="/">
              <span>
                <BsBagFill />
              </span>
              <p>Cart</p>
            </Link>

            <Link to="/">
              <span>
                <IoMdNotificationsOutline />
              </span>
              <p>Notification</p>
            </Link>
            <Link to="/">
              <div className="mobileNavBottomIcon">
              <img src={icon} alt="" />
              </div>
            </Link>

            <Link to="/">
              <span>
                {" "}
                <BiChat />
              </span>
              <p>Cart</p>
            </Link>

            <Link to="/">
              <span>
                <BsThreeDots />
              </span>
              <p>Menu</p>
            </Link>
          </div>
        </Container>
      </div>
      {/* mobileNavFooter_end */}
      <div className="top_header">
        <Container className="d-flex justify-content-between">
          <ul className="d-flex gap-3">
            <li>
              <span>
                <BiPhoneCall />
              </span>
              <a href="tel:018790">018790</a>
            </li>
            <li>
              <span>
                <AiTwotoneMail />
              </span>
              <a href="mail-to:rajuahmmad@gmail.com">rajuahmmad@gmail.com</a>
            </li>
          </ul>
          <div>
            <span>
              <BsPhone />
            </span>
            <a href="">Save big on our app!</a>
          </div>
        </Container>
      </div>
      {/* end_top_header */}
      {/* start_middle_header */}
      <div className="middle_header d-flex align-items-center">
        <Container>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <img className="logo" src={logo} alt="" />
            <InputGroup className="mb-3">
              <FormControl
                placeholder="search for"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button
                variant="outline-primary bg-primary text-white"
                id="button-addon2"
              >
                Button
              </Button>
            </InputGroup>
            <ul className="icons d-flex gap-2">
              <li>
                <a href="">
                  <BsBag />
                </a>
              </li>
              <li>
                <a href="">
                  <IoMdNotifications />
                </a>
              </li>
              <li>
                <a href="">
                  <BiMessage />
                </a>
              </li>
              <li>
                <a href="">
                  <FaUser />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/* end_middle_header */}
      {/* bottom_header_start */}
      <div className="bottom_header">
        <Container>
          <div className="d-flex justify-content-between">
            <div>
              <div className="d-flex justify-content-center bottom_left">
                <div className="sideBarInner">
                  <button onClick={() => sideBarClick(!sideBarActive)}>
                    <GoThreeBars />
                  </button>
                  {sideBarActive && (
                    <Sidebar
                      sideBarClick={sideBarClick}
                      sideBarActive={sideBarActive}
                    />
                  )}
                </div>
                <div className="categories">
                  <button href="" onClick={categoriesClick}>
                    categories <IoIosArrowDown />
                  </button>
                  <ul className={catActive ? "categoriesActive" : ""}>
                    <li>
                      <a href="">dsfsdf</a>
                      <ul>
                        <li>
                          <a href="">dsfsdf</a>
                          <ul>
                            <li>
                              <a href="">dsfsdf</a>
                            </li>
                            <li>
                              <a href="">dsfsdf</a>
                            </li>
                            <li>
                              <a href="">dsfsdf</a>
                            </li>
                            <li>
                              <a href="">dsfsdf</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="">dsfsdf</a>
                        </li>
                        <li>
                          <a href="">dsfsdf</a>
                        </li>
                        <li>
                          <a href="">dsfsdf</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="">dsfsdf</a>
                    </li>
                    <li>
                      <a href="">dsfsdf</a>
                    </li>
                    <li>
                      <a href="">dsfsdf</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <ul className="bottomRightMenu">
                <li>
                  <Link to="/">Giftcard</Link>
                </li>
                <li>
                  <Link to="/">Catagories</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="bottomRightMenu">
                <li>
                  <Link to="/">NewsFeed</Link>
                </li>
                <li>
                  <Link to="/">Catagories</Link>
                </li>
                <li>
                  <Link to="/">Help</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      {/* bottom_header_end */}
    </div>
  );
};

export default Header;
