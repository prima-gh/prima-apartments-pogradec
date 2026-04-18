import React from 'react';
import { HeaderComponent } from './components/header/header';
import HeroSlideshow from './components/hero-slideshow/hero-slideshow';
import GuesthouseInfoComponent from './components/guesthouse-info/guesthouse-info';
import HouseRulesComponent from './components/house-rules/house-rules';
import ContactDetailsComponent from './components/contact-details/contact-details';
import './App.css';
import VisitorReviewsComponent from './components/visitor-reviews/visitor-reviews';

export const App = () => {
  return (
    <div className="main-container">
      <div className="site-content">
        <HeaderComponent />
        <HeroSlideshow />
        <GuesthouseInfoComponent />
        <VisitorReviewsComponent />
        <HouseRulesComponent />
        <ContactDetailsComponent />
      </div>
    </div>
  );
};

export default App;
