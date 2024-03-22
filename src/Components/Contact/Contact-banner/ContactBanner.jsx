import React from 'react'
import './ContactBanner.scss'
// import { useRef } from 'react';
// import { useEffect } from 'react';
// import L from 'leaflet';

const ContactBanner = () => {
    // const mapContainer = useRef(null);
    // const mapRef = useRef(null); 
  
    // useEffect(() => {
    //   if (!mapRef.current) {
    //     mapRef.current = L.map(mapContainer.current).setView([28.5880278, 77.2522500], 15);
  
    //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //       attribution: '© OpenStreetMap contributors',
    //     }).addTo(mapRef.current);
  
    //     const redMarker = L.marker([28.5880278, 77.2522500], {
    //       icon: new L.Icon({
    //         iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    //         iconSize: [25, 41],
    //         iconAnchor: [12, 41],
    //         popupAnchor: [1, -34],
    //         shadowSize: [41, 41],
    //       }),
    //     }).addTo(mapRef.current);
  
    //     redMarker.bindPopup('<b>Reqx Technologies</b>').openPopup();
    //   }
    // }, []);
  
  return (
    <div>
    <div className="contact-us-container">
    <div className="banner-contact">
      <div className="overlay">
        <h1>Contact Us</h1>
      </div>
    </div>
   
  </div>

    </div>

  )
}

export default ContactBanner

//   <div className='maps'>
//   <div id='map' ref={mapContainer} style={{ width: '600px', height: '450px' }} />
// </div>