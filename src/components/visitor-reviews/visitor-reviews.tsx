import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { useTranslation } from "react-i18next";
import { visitorReviews } from "../../utils/constants";
import "./visitor-reviews.css";

const VisitorReviewsComponent = () => {
  const { t } = useTranslation();

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNextReview = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % visitorReviews.length);
      setIsTransitioning(false);
    }, 500);
  };


  useEffect(() => {
    const interval = setInterval(handleNextReview, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="visitor-review-section">
      <p className="section-title">{t('visitorReviews.sectionTitle')}</p>
      <Card className={`review-card ${isTransitioning ? 'review-card-exit' : ''}`} >
        <p
          className="review-quote"
          lang={visitorReviews[currentReviewIndex].lang}
        >
          &ldquo;{visitorReviews[currentReviewIndex].text}&rdquo;
        </p>
        <p className="author-title"> — {visitorReviews[currentReviewIndex].author}</p>
      </Card>
    </div>
  );
};

export default VisitorReviewsComponent;
