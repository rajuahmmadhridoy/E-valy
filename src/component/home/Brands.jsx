import React from "react";
import {
  Button,
  Card,
  Container,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import shop2 from "assets/images/brand-2.png";
import shop3 from "assets/images/brand-3.png";
import shop4 from "assets/images/brand-4.png";
import shop5 from "assets/images/brand-5.png";
import shop6 from "assets/images/brand-6.png";
import shop7 from "assets/images/brand-7.png";
import shop8 from "assets/images/brand-8.png";
import shop9 from "assets/images/brand-9.png";
import shop10 from "assets/images/brand-10.png";
import shop11 from "assets/images/brand-11.png";
import shop12 from "assets/images/brand-12.png";
import { Link } from "react-router-dom";
const Brands = () => {
  return (
    <div className="brands_component">
      <Container>
        <div className="brands_top">
          <h2>Shop by Brands</h2>
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
        <div className="brandsInner">
          <Card>
            <Link to="/">
              <Card.Img variant="top" src={shop2} />
              <Card.Body>
                <Card.Text className="text-black text-center">Some quick example</Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card>
            <Link to="/">
              <Card.Img variant="top" src={shop3} />
              <Card.Body>
                <Card.Text className="text-black text-center">Some quick example</Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card>
            <Link to="/">
              <Card.Img variant="top" src={shop4} />
              <Card.Body>
                <Card.Text className="text-black text-center">Some quick example</Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card>
            <Link to="/">
              <Card.Img variant="top" src={shop5} />
              <Card.Body>
                <Card.Text className="text-black text-center">Some quick example</Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card>
            <Link to="/">
              <Card.Img variant="top" src={shop6} />
              <Card.Body>
                <Card.Text className="text-black text-center">Some quick example</Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card>
            <Link to="/">
              <Card.Img variant="top" src={shop7} />
              <Card.Body>
                <Card.Text className="text-black text-center">Some quick example</Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card>
            <Link to="/">
              <Card.Img variant="top" src={shop8} />
              <Card.Body>
                <Card.Text className="text-black text-center">Some quick example</Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card>
            <Link to="/">
              <Card.Img variant="top" src={shop9} />
              <Card.Body>
                <Card.Text className="text-black text-center">Some quick example</Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card>
            <Link to="/">
              <Card.Img variant="top" src={shop10} />
              <Card.Body>
                <Card.Text className="text-black text-center">Some quick example</Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card>
            <Link to="/">
              <Card.Img variant="top" src={shop11} />
              <Card.Body>
                <Card.Text className="text-black text-center">Some quick example</Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card>
            <Link to="/">
              <Card.Img variant="top" src={shop12} />
              <Card.Body>
                <Card.Text className="text-black text-center">Some quick example</Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card>
            <Link to="/">
              <Card.Img variant="top" src={shop12} />
              <Card.Body>
                <Card.Text className="text-black text-center">Some quick example</Card.Text>
              </Card.Body>
            </Link>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Brands;
