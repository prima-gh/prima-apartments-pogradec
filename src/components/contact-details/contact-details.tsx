import React from "react";
import { Tooltip } from "antd";
import MobileDetect from 'mobile-detect';
import { useTranslation } from "react-i18next";
import { AirbnbIcon } from "./AirbnbIcon";
import "./contact-details.css";

const AIRBNB_PRIMA_1_URL = "https://www.airbnb.com/rooms/937043759409145029";
const AIRBNB_PRIMA_2_URL = "https://www.airbnb.com/rooms/1406434639380725200";

/** Booking.com property page (Prima Guesthouse, Pogradec) */
const BOOKING_URL =
  "https://www.booking.com/hotel/al/prima-guesthouse.de.html?aid=2311236&label=de-de-booking-desktop-NkYP4HIKIfTgPQST3bL6fAS652829000617%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9061156%3Ali%3Adec%3Adm-Share-TRkFEy%401774809254&sid=1fef22f49aafa21314c99fef636eead8&dest_id=-107437&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&soh=1&sr_order=popularity&srepoch=1774809287&srpvid=4fdd829662e00260&type=total&ucfs=1#map_closed";

const linkColor = "var(--very-dark-desaturated-green)";

const Insta = require('../../assets/icons/insta.png');
const Phone = require('../../assets/icons/phone.png');
const Wap = require('../../assets/icons/wap.png');
const Maps = require('../../assets/icons/maps.png');
const Booking = require('../../assets/icons/booking.png');

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
    window.open(BOOKING_URL, "_blank");
  };

  const navigateToAirbnbPrima1 = () => {
    window.open(AIRBNB_PRIMA_1_URL, "_blank");
  };

  const navigateToAirbnbPrima2 = () => {
    window.open(AIRBNB_PRIMA_2_URL, "_blank");
  };

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

        <div onClick={navigateToAirbnbPrima1} style={{ cursor: "pointer", marginRight: 15 }}>
          <Tooltip title={t('contactDetails.visitAirbnbPrima1')} placement="right" color="var(--very-dark-desaturated-green)" trigger={"hover"}>
            <AirbnbIcon size={28} />
            <p style={{ marginTop: 6, color: linkColor }}>Airbnb · Prima 1</p>
          </Tooltip>
        </div>

        <div onClick={navigateToAirbnbPrima2} style={{ cursor: "pointer", marginRight: 15 }}>
          <Tooltip title={t('contactDetails.visitAirbnbPrima2')} placement="right" color="var(--very-dark-desaturated-green)" trigger={"hover"}>
            <AirbnbIcon size={28} />
            <p style={{ marginTop: 6, color: linkColor }}>Airbnb · Prima 2</p>
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
