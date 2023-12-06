// CardP.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link untuk navigasi
import './CardP.css'; // Sesuaikan dengan nama file CSS Anda
import Navbarbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CardP = () => {
  const [pokemonData, setPokemonData] = useState([]);

  const usenavigate = useNavigate();
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
          toast.warning("Login First Please");
          usenavigate('/login');
        }
      }, []);

  useEffect(() => {
    const API_URL = 'https://api.pokemontcg.io/v2/cards/';

    // Lakukan permintaan ke API Pokémon
    axios.get(API_URL)
      .then(response => {
        // Ambil seluruh array kartu dari respons
        const allCards = response.data.data;
        setPokemonData(allCards);
      })
      .catch(error => {
        console.error('Error fetching Pokémon data:', error);
      });
  }, []); // useEffect akan dijalankan sekali setelah komponen dipasang

  return (
    <>
    <Navbarbar></Navbarbar>
    <div className="CardPContainer">
      <h1>Pokémon Cards</h1>
      {pokemonData.length > 0 ? (
        <div>
          {pokemonData.map((card, index) => (
            <div key={index} className="PokemonCard">
              <img src={card.images.small} alt={card.name} className="PokemonImage" />
              <h2 className="PokemonName">{card.name}</h2>
              <Link to={`/card-detail/${index}`}>
                <button className="DetailButton">Detail</button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="LoadingMessage">Loading Pokémon data...</p>
      )}
    </div>
    </>
  );
};

export default CardP;
