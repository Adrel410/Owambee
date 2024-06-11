// src/App.js
import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FeaturedRestaurants from './components/FeaturedRestaurants';
import OrderSteps from './components/OrderSteps';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <SearchBar />
            <FeaturedRestaurants />
            <OrderSteps />
            <PartnerSection />
            <Footer />
        </div>
    );
}

export default App;


