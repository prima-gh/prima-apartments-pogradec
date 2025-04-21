import React from 'react';
import { HeaderComponent } from './components/header/header';
import GuesthouseInfoComponent from './components/guesthouse-info/guesthouse-info';
import HouseRulesComponent from './components/house-rules/house-rules';
import ContactDetailsComponent from './components/contact-details/contact-details';
import './App.css';
import VisitorReviewsComponent from './components/visitor-reviews/visitor-reviews';
import ApartmentCarousels from './components/carousel/apartment-carousels';

export const App = () => {
  return (
    <div className="main-container">
      <HeaderComponent/>
      <ApartmentCarousels/>
      <GuesthouseInfoComponent />
      <HouseRulesComponent/>
      <VisitorReviewsComponent/>

      <ContactDetailsComponent/>

    </div>
  );
}

export default App;
