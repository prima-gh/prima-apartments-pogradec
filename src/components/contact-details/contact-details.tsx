import React from "react";
import { Tooltip } from "antd";
import MobileDetect from 'mobile-detect';
import { useTranslation } from "react-i18next";
import "./contact-details.css";

const Insta = require('../../assets/icons/insta.png');
const Phone = require('../../assets/icons/phone.png');
const Wap = require('../../assets/icons/wap.png');
const Maps = require('../../assets/icons/maps.png');
const Booking = require('../../assets/icons/booking.png');
const AirbnbPrima2 = require('../../assets/icons/airbnb.png');

const ContactDetailsComponent = () => {
  const { t } = useTranslation();

  const phoneNumber: string = '+355697046181';

  const callUs = () => {
    const md: MobileDetect = new MobileDetect(window.navigator.userAgent);

    if (md.mobile()) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
     return;     
    }
  };
  const sendMessageWhatsapp = () => {
    window.open("https://wa.me/+355685650070", "_blank")
  }

  const navigateToInsta = () => {
    window.open("https://instagram.com/prima.apartments.pogradec", "_blank");
  };

  const navigateToMaps = () => {
    window.open("https://goo.gl/maps/EwEG13TEQwcLRFwH7", "_blank");
  };

  const navigateToBooking = () => {
    window.open("https://www.booking.com/Share-8pO95x", "_blank");
  }

  const navigateToPrima1Airbnb = () => {
    window.open("https://www.airbnb.com/rooms/937043759409145029?check_in=2025-05-23&check_out=2025-05-25&guests=2&adults=2&s=67&unique_share_id=97a809e5-ff1f-49a6-9c3c-50f12d35e63e", "_blank");
  }

  const navigateToPrima2Airbnb = () => {
    window.open("https://www.airbnb.com/rooms/1406434639380725200?check_in=2025-05-23&check_out=2025-05-25&guests=2&adults=2&s=67&unique_share_id=19d27e2b-c4fb-4d95-aaf7-10dc935f5e58", "_blank");
  }

  return (
    <div className="footer-container">
      <div className="contact-section">
        <div onClick={callUs} style={{ cursor: "pointer", marginRight: 15 }}>
          <Tooltip title={t('contactDetails.phonecall')} placement="right" color="var(--very-dark-desaturated-green)" trigger={"hover"}>
            <img src={Phone} height={28} width={28} alt="Phone" />
            <p style={{ marginTop: 5, color: 'var(--very-dark-desaturated-green)' }}>+355 69 704 6181</p>
          </Tooltip>
        </div>
        <div onClick={sendMessageWhatsapp} style={{ cursor: "pointer", marginRight: 15 }}>
          <Tooltip title={t('contactDetails.whatsapp')} placement="right" color="var(--very-dark-desaturated-green)" trigger={"hover"}>
            <img src={Wap} height={28} width={28} alt="Wap" />
            <p style={{ marginTop: 5, color: 'var(--very-dark-desaturated-green)' }}>+355 68 565 0070</p>
          </Tooltip>
        </div>

        <div onClick={navigateToBooking} style={{ cursor: "pointer", marginRight: 15 }}>
          <Tooltip title={t('contactDetails.visitBooking')} placement="right" color="var(--very-dark-desaturated-green)" trigger={"hover"}>
            <img src={Booking} height={32} width={35} alt="Booking" />
            <p style={{ marginTop: 2, color: 'var(--very-dark-desaturated-green)' }}>Booking</p>
          </Tooltip>
        </div>

        <div onClick={navigateToMaps} style={{ cursor: "pointer", marginRight: 15 }}>
          <Tooltip title={t('contactDetails.visitMaps')} placement="right" color="var(--very-dark-desaturated-green)" trigger={"hover"}>
            <img src={Maps} height={28} width={28} alt="Maps" />
            <p style={{ marginTop: 5, color: 'var(--very-dark-desaturated-green)' }}>Google Maps</p>
          </Tooltip>
        </div>
        
        <div onClick={navigateToInsta} style={{ cursor: "pointer" }} >
          <Tooltip title={t('contactDetails.visitInsta')} placement="right" color="var(--very-dark-desaturated-green)" trigger={"hover"}>
            <img src={Insta} height={28} width={28} alt="Insta" />
            <p style={{ marginTop: 5, color: 'var(--very-dark-desaturated-green)' }}>Instagram</p>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsComponent;
