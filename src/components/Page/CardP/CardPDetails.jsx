// CardPDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CardPDetails.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import Navbarbar from '../Navbar/Navbar';

const CardPDetail = () => {
  const { index } = useParams();
  const [cardDetail, setCardDetail] = useState(null);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/cardp'); // Navigate back to the CardYList page
  };

  useEffect(() => {
    const API_URL = 'https://api.pokemontcg.io/v2/cards/';
    axios.get(API_URL)
      .then(response => {
        const allCards = response.data.data;
        const selectedCard = allCards[index];
        setCardDetail(selectedCard);
      })
      .catch(error => {
        console.error('Error fetching Pokémon detail:', error);
      });
  }, [index]);

  if (!cardDetail) {
    return <p className="loading">Loading Pokémon detail...</p>;
  }

  return (
    <>
    <Navbarbar></Navbarbar>
    <div className="card-details">
      <h1>Pokémon Card Detail</h1>
      <div className="PokemonCardDetail">
        <img src={cardDetail.images.large} alt={cardDetail.name} className="PokemonImageDetail" />
        <h2 className="PokemonNameDetail">{cardDetail.name}</h2>
        <p>HP: {cardDetail.hp}</p>
        <p>Type: {cardDetail.types}</p>
        <p>Evolves To: {cardDetail.evolvesTo}</p>
        <p>Rules: {cardDetail.rules}</p>
        <button onClick={handleBack}>Back to CardYList</button>
      </div>
    </div>
    </>
  );
};

export default CardPDetail;
