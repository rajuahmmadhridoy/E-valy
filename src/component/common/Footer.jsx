import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import googlePlay from'assets/images/coming-soon.png'
import appStore from'assets/images/coming-soon201.png'
import { Link } from 'react-router-dom';
import {AiFillFacebook,AiOutlineTwitter,AiFillYoutube} from "react-icons/ai";
const Footer = () => {
    return (
        <div className="footer_component">
            <Container>
                <Row className="justify-content-center">
                    <Col md={3}sm={6}>
                        <div className="footerItems">
                            <h4>Download</h4>
                           <Link to="/"> <div><img src={googlePlay} alt="" /></div></Link>
                           <Link to="/"> <div><img src={appStore} alt="" /></div></Link>
                        </div>
                    </Col>
                    <Col md={3}sm={6}>
                        <div className="footerItems">
                            <ul>
                                <h4>Menu</h4>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Cookie Policy</Link></li>
                                <li><Link to="/">Purchasing Policy</Link></li>
                                <li><Link to="/">Terms & Conditions</Link></li>
                            </ul>
                           
                        </div>
                    </Col>
                    <Col md={3}sm={6}>
                        <div className="footerItems">
                            <ul>
                                <h4>Contact Us</h4>
                                <li><p>House #8 (1st Floor), Road # 14,</p></li>
                                <li><p>Dhanmondi, Dhaka-1209.</p></li>
                                <li><p>Email: support@evaly.com.bd</p></li>
                                <li><p>Contact no: 09638111666</p></li>
                                <li><p>Terms & Conditions</p></li>
                            </ul>
                           
                        </div>
                    </Col>
                    <Col md={3}sm={6}>
                        <div className="footerItems">
                                <h4>Get in Touch</h4>
                                <div className="footerItemsEnd">
                                <Link to="/"><AiFillFacebook /></Link>
                                <Link to="/"><AiOutlineTwitter /></Link>
                                <Link to="/"><AiFillYoutube /></Link>
                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;