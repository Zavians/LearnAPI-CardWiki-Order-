import React, { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbarbar from '../Navbar/Navbar';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import './Home.css';



const Home = () => {
    
    const usenavigate = useNavigate();
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
          toast.warning("Login First Please");
          usenavigate('/login');
        }
      }, []);

    return (  
        <>
        <Navbarbar></Navbarbar>
        
        <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://www.exodus-cards.com/images/2018-card-fan.png"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">TCG Card Wiki</h4>
            </div>
            <h1>Kelompok XX</h1>
            <div className="text-center pt-1 mb-5 pb-1">
            <a className="text-muted" href="#!">Lets Explore!</a>
              <MDBBtn className="mb-4 w-100 gradient-custom-2" href='/cardy'>Yu-Gi-Oh Card</MDBBtn>
              <MDBBtn className="mb-4 w-100 gradient-custom-2" href='/cardp'>Pokemon Card</MDBBtn>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">Lets Explore TCG Card With Us !!</h4>
              <p class="small mb-0">Trading Card Games (TCG) adalah permainan yang menggabungkan strategi, 
              keterampilan, dan keberuntungan dengan menggunakan kartu koleksi yang unik. Dalam TCG, 
              setiap pemain membangun dek kartu mereka sendiri dengan berbagai kartu yang memiliki kekuatan, 
              kemampuan, dan taktik berbeda. Selama permainan, pemain berduel satu sama lain, 
              menggunakan kartu-kartu tersebut untuk mencapai tujuan tertentu atau mengalahkan lawan.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
        </>
    );
}
 
export default Home;