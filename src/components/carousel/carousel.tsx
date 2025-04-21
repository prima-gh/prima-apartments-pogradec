import { Carousel } from "antd";
import React from "react";
import { IImage } from "../../utils/interfaces";
import './carousel.css'; 

interface CarouselProps {
    images: IImage[];
    title?: string;
}

const CarouselComponent: React.FC<CarouselProps> = ({ images, title }) => {
  return (
    <Carousel 
        effect="fade"
        autoplay
    >
        {images &&
            images.map(el => 
                <div key={el.label} className="carousel-section">
                    <img 
                        className="carousel-image-container" 
                        height={794} 
                        width={595} 
                        src={el.url} 
                        alt={el.label} 
                    />
                </div>
            )
        }
    </Carousel>
  );
};

export default CarouselComponent;
