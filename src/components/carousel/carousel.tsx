import { Carousel } from "antd";
import React from "react";
import { IImage } from "../../utils/interfaces";
import './carousel.css'; 


const image1 = require('../../assets/images/1.jpg');
const image2 = require('../../assets/images/2.jpg');
const image3 = require('../../assets/images/3.jpg');
const image4 = require('../../assets/images/4.jpg');
const image5 = require('../../assets/images/5.jpg');
const image6 = require('../../assets/images/6.jpg');
const image7 = require('../../assets/images/7.jpg');
const image7_2 = require('../../assets/images/7-2.JPG');
const image8 = require('../../assets/images/8.jpg');
const image9 = require('../../assets/images/9.jpg');
const image10 = require('../../assets/images/10.JPG');
const image11 = require('../../assets/images/11.JPG');
const image13 = require('../../assets/images/13.JPG');
const image14 = require('../../assets/images/14.JPG');
const image15 = require('../../assets/images/15.JPG');
const image16 = require('../../assets/images/16.JPG');
const image17 = require('../../assets/images/17.jpg');
const image18 = require('../../assets/images/18.jpeg');

const images: IImage[] = [
    { 
        url: image1,
        label: '1'
    },
    { 
        url: image2,
        label: '2'
    },
    { 
        url: image3,
        label: '3'
    },
    { 
        url: image4,
        label: '4'
    },
    { 
        url: image5,
        label: '5'
    },
    { 
        url: image6,
        label: '6'
    },
    { 
        url: image7,
        label: '7'
    },
    { 
        url: image7_2,
        label: '7-2'
    },
    { 
        url: image8,
        label: '8'
    },
    { 
        url: image9,
        label: '9'
    },
    { 
        url: image10,
        label: '10'
    },
    { 
        url: image11,
        label: '11'
    },
    { 
        url: image13,
        label: '13'
    },
    { 
        url: image14,
        label: '14'
    },
    { 
        url: image15,
        label: '15'
    },
    { 
        url: image16,
        label: '16'
    },
    { 
        url: image17,
        label: '17'
    },
    { 
        url: image18,
        label: '18'
    }    
]

const CarouselComponent = () => {
  return (
    <Carousel effect="fade">
        {images &&
            images.map(el => 
                <div key={el.label} className="carousel-section">
                    <img 
                        className="carousel-image-container" 
                        src={el.url} 
                        height={794} 
                        width={595} 
                        alt={el.label} 
                    />
                </div>
            )
        }
    </Carousel>
  );
};

export default CarouselComponent;
