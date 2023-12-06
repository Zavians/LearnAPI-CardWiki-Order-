import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './CardY.css';
import Navbarbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CardYList = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        setCards(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCards();
  }, []);

  const usenavigate = useNavigate();
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
          toast.warning("Login First Please");
          usenavigate('/login');
        }
      }, []);


  const showDetails = (card) => {
    setSelectedCard(card);
  };

  const hideDetails = () => {
    setSelectedCard(null);
  };

  return (
    <>
    <Navbarbar/>
    <div>
      <h1>Yu-Gi-Oh! Cards</h1>
      <div className="card-list">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.card_images[0].image_url} alt={card.name} />
            <p>{card.name}</p>
            {/* Use Link to navigate to CardYDetails with the card's id as a parameter */}
            <Link to={`/cardy/${card.id}`}>
              <button onClick={() => showDetails(card)}>Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CardYList;
