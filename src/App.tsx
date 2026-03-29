import React from 'react';
import { HeaderComponent } from './components/header/header';
import AccommodationGallery from './components/carousel/carousel';
import GuesthouseInfoComponent from './components/guesthouse-info/guesthouse-info';
import HouseRulesComponent from './components/house-rules/house-rules';
import ContactDetailsComponent from './components/contact-details/contact-details';
import './App.css';
import VisitorReviewsComponent from './components/visitor-reviews/visitor-reviews';

export const App = () => {
  return (
    <div className="main-container">
      <HeaderComponent/>
      <GuesthouseInfoComponent />
      <AccommodationGallery />
      <HouseRulesComponent/>
      <VisitorReviewsComponent/>

      <ContactDetailsComponent/>

    </div>
  );
}

export default App;
