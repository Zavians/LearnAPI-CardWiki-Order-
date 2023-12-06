// CardYDetails.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './CardYDetails.css'; // Import the CSS file
import Navbarbar from '../Navbar/Navbar';

const CardYDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`);
        setCardDetails(response.data.data[0]);
      } catch (error) {
        console.error('Error fetching card details:', error);
      }
    };

    fetchCardDetails();
  }, [id]);

  const handleBack = () => {
    navigate('/cardy'); // Navigate back to the CardYList page
  };

  if (!cardDetails) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
    <Navbarbar/>
    <div className="card-details">
      <h2>{cardDetails.name} Details</h2>
      <img src={cardDetails.card_images[0].image_url} alt={cardDetails.name} />
      <p>ID: {cardDetails.id}</p>
      <p>Name: {cardDetails.name}</p>
      <p>Type: {cardDetails.type}</p>
      <p>Frame Type: {cardDetails.card_type}</p>
      <p>Description: {cardDetails.desc}</p>
      <button onClick={handleBack}>Back to CardYList</button>
    </div>
    </>
  );
};

export default CardYDetails;
