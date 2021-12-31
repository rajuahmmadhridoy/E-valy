import React from "react";
import {
  Button,
  Card,
  Container,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import shop1 from "assets/images/item1.png";
import shop2 from "assets/images/item2.png";
import shop3 from "assets/images/item3.png";
import shop4 from "assets/images/item4.png";
import shop5 from "assets/images/item5.png";
import { Link } from "react-router-dom";
const BagsLuggages = () => {
  return (
    <div className="bagsLuggages_component">
      <Container>
        <div className="bagsLuggages_top">
          <h2>Bags & Luggages</h2>
          <div className="d-flex">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search for..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Button
              </Button>
            </InputGroup>
            <Button variant="danger">View All</Button>
          </div>
        </div>
        <div className="bagsLuggagesInner">
          <Link to="/">
            <div className="bagsLuggagesItems">
              <div className="images">
                  <img src={shop1} alt="" />
              </div>
              <div className="bagsLuggagesContent">
              <h4>Canvas Shoulder Bag for Men 38" - Brown</h4>
              <p>৳557.00</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="bagsLuggagesItems">
              <div className="images">
                  <img src={shop2} alt="" />
              </div>
              <div className="bagsLuggagesContent">
              <h4>Canvas Shoulder Bag for Men 38" - Brown</h4>
              <p>৳557.00</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="bagsLuggagesItems">
              <div className="images">
                  <img src={shop3} alt="" />
              </div>
              <div className="bagsLuggagesContent">
              <h4>Canvas Shoulder Bag for Men 38" - Brown</h4>
              <p>৳557.00</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="bagsLuggagesItems">
              <div className="images">
                  <img src={shop4} alt="" />
              </div>
              <div className="bagsLuggagesContent">
              <h4>Canvas Shoulder Bag for Men 38" - Brown</h4>
              <p>৳557.00</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="bagsLuggagesItems">
              <div className="images">
                  <img src={shop5} alt="" />
              </div>
              <div className="bagsLuggagesContent">
              <h4>Canvas Shoulder Bag for Men 38" - Brown</h4>
              <p>৳557.00</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="bagsLuggagesItems">
              <div className="images">
                  <img src={shop1} alt="" />
              </div>
              <div className="bagsLuggagesContent">
              <h4>Canvas Shoulder Bag for Men 38" - Brown</h4>
              <p>৳557.00</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="bagsLuggagesItems">
              <div className="images">
                  <img src={shop2} alt="" />
              </div>
              <div className="bagsLuggagesContent">
              <h4>Canvas Shoulder Bag for Men 38" - Brown</h4>
              <p>৳557.00</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="bagsLuggagesItems">
              <div className="images">
                  <img src={shop3} alt="" />
              </div>
              <div className="bagsLuggagesContent">
              <h4>Canvas Shoulder Bag for Men 38" - Brown</h4>
              <p>৳557.00</p>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default BagsLuggages;
