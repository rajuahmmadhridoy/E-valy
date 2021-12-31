import Footer from 'component/common/Footer';
import Header from 'component/common/Header';
import Sidebar from 'component/common/Sidebar';
import BagsLuggages from 'component/home/BagsLuggages';
import Banner from 'component/home/Banner';
import Brands from 'component/home/Brands';
import Discount from 'component/home/Discount';
import ShopStore from 'component/home/ShopStore';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Discount />
            <ShopStore />
            <Brands />
            <BagsLuggages />
            <Footer />
        </div>
    );
};

export default Home;