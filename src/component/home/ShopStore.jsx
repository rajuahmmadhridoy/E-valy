import React from "react";
import {Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import shop1 from'assets/images/express_suha.png'
import shop2 from'assets/images/express_shwapno.png'
import shop3 from'assets/images/express_unimart.png'
import shop4 from'assets/images/express_khaas.png'
import shop5 from'assets/images/express_meena.png'
import shop6 from'assets/images/express_bengal_meat.png'
const ShopStore = () => {
  return (
    <div className="shopStore_component">
      <Container>
        <div className="shopStoreItems">
            <Link to="/"><img src={shop1} alt="" /></Link>
            <Link to="/"><img src={shop2} alt="" /></Link>
            <Link to="/"><img src={shop3} alt="" /></Link>
            <Link to="/"><img src={shop4} alt="" /></Link>
            <Link to="/"><img src={shop5} alt="" /></Link>
            <Link to="/"><img src={shop6} alt="" /></Link>
            <Link to="/"><img src={shop1} alt="" /></Link>
            <Link to="/"><img src={shop1} alt="" /></Link>
            <Link to="/"><img src={shop1} alt="" /></Link>
            <Link to="/"><img src={shop1} alt="" /></Link>
            <Link to="/"><img src={shop1} alt="" /></Link>
            <Link to="/"><img src={shop1} alt="" /></Link>
        </div>
      </Container>
    </div>
  );
};

export default ShopStore;
