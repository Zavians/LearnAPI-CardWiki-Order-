import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
} from 'mdb-react-ui-kit';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('username');
        if (isLoggedIn) {
            // If the user is already logged in, redirect them to another page (e.g., home page)
            navigate('/');
        }
    }, [navigate]);

    const proceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:8001/user/" + username)
                .then((res) => res.json())
                .then((resp) => {
                    if (Object.keys(resp).length === 0) {
                        toast.error("Please Check The Username Again!");
                    } else {
                        if (resp.password === password) {
                            toast.success("Berhasil");
                            sessionStorage.setItem('username', username);
                            navigate("/");
                        } else {
                            toast.error("Please Check The Password Again!");
                        }
                    }
                })
                .catch((err) => {
                    toast.error("Your Login Failed Because :" + err.message);
                });
        }
    };

    const validate = () => {
        let result = true;
        if (!username) {
            result = false;
            toast.warning("Please Input Username");
        }
        if (!password) {
            result = false;
            toast.warning("Please Input Password");
        }
        return result;
    };

    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' style={{ height: '100vh', minHeight: '100%' }}>
            <MDBRow>
                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center' style={{ marginLeft: 150 }}>
                <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
                        TCG Card Wiki <br />
                        <span style={{ color: 'hsl(218, 81%, 75%)' }}>TCG Card Wiki: Setiap Kartu Punya Cerita!</span>
                    </h1>

                    <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                    Selamat datang di TCG Card Wiki, sumber daya terlengkap untuk semua yang berkaitan dengan kartu permainan berbasis giliran (TCG).
                    Di sini, setiap kartu memiliki cerita uniknya sendiri, dari kekuatan magis hingga kisah epik di balik setiap strategi permainan. 
                   
                    </p>
                </MDBCol>
                <MDBCol md='4' className='position-relative'>
                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
                    <MDBCard className='my-4 bg-glass' style={{ marginLeft: 60 }}>
                        <form onSubmit={proceedLogin}>
                            <MDBCardBody className='p-5'>
                                <h2 className="fw-bold mb-5">Sign up now</h2>
                                <MDBInput value={username} onChange={(e) => setUsername(e.target.value)} wrapperClass='mb-4' label='Username' type='text' />
                                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' type='password' />
                                <MDBBtn className='w-100 mb-4 btn btn-success' size='md' type='submit'>
                                    Sign up
                                </MDBBtn>
                                <div className="text-center">
                                    <p>Dont Have Account??</p>
                                    <p>Register Now</p>
                                    <MDBBtn className='w-100 mb-4' href="/register" size='md'>
                                        Register
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>
                        </form>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Login;
