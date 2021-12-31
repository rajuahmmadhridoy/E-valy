import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mobile from'assets/images/image-removebg-preview.png'
const Discount = () => {
    return (
        <Container className="discount_Component">
            <Row>
                <Col md={6}>
                    <Link to="/">
                    <div className="discountInner mb-5">
                        <div className="discountContent">
                            <button>NOW</button>
                            <p>Samsung</p>
                            <h4>Samsung Galaxy A21s Smartphone 6.5" - 4GB RAM - 64GB ROM - 48MP Camera</h4>
                            <p>Smart Phone</p>
                            <h4>Starting at <span>৳16999 </span>৳10999 </h4>
                        </div>
                        <img src={mobile} alt="" />
                    </div>
                    </Link>
                </Col>
                <Col md={6}>
                    <Link to="/">
                    <div className=" discountInner mb-5">
                        <div className="discountContent">
                            <button>NOW</button>
                            <p>Samsung</p>
                            <h4>Samsung Galaxy A21s Smartphone 6.5" - 4GB RAM - 64GB ROM - 48MP Camera</h4>
                            <p>Smart Phone</p>
                            <h4>Starting at <span>৳16999 </span>৳10999 </h4>
                        </div>
                        <img src={mobile} alt="" />
                    </div>
                    </Link>
                </Col>
            </Row>
            
        </Container>
    );
};

export default Discount;