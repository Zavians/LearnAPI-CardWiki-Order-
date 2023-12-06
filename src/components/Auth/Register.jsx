import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';

const Register = () => {
    const [id, idchange] = useState("");
    const [password, passwordchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const navigate = useNavigate();

    const isValidate = () => {
        let isproceed = true;
        let errormessage = "Please Input"
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username'
        }

        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password'
        }

        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname'
        }

        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email'
        }
        if (!isproceed) {
            toast.warning(errormessage)
        }
        return isproceed;
    }


    const handleSubmit = (e) => {

        e.preventDefault();
        let regobj = { id, name, password, email };
        if (isValidate()) {
            fetch("http://localhost:8001/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj),
            })
                .then((res) => {
                    toast.success('Register Success')
                    navigate('/login');
                })
                .catch((err) => {
                    toast.error('Failed :' + err.message);
                });
        }
    }


    return (
        <MDBContainer fluid>

            <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>
            <form onSubmit={handleSubmit}>
                <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                    <MDBCardBody className='p-5 text-center'>

                        <h2 className="fw-bold mb-5">Register Now</h2>

                        <MDBRow>
                            <MDBCol col='6'>
                                <MDBInput required value={id} onChange={e => idchange(e.target.value)} wrapperClass='mb-4' label='Username'  type='text' />
                            </MDBCol>

                            <MDBCol col='6'>
                                <MDBInput value={password} onChange={e => passwordchange(e.target.value)} wrapperClass='mb-4' label='Password'  type='password' />
                            </MDBCol>
                        </MDBRow>

                        <MDBInput value={name} onChange={e => namechange(e.target.value)} wrapperClass='mb-4' label='Fullname'type='text' />
                        <MDBInput value={email} onChange={e => emailchange(e.target.value)} wrapperClass='mb-4' label='Email' type='email' />


                        <MDBBtn className='w-100 mb-4 btn btn-success' type='submit'size='md'>Add Account</MDBBtn>
                        <p>Or?</p>
                        <MDBBtn className='w-100 mb-4 btn btn-danger' href="/login" size='md'>Back to Login</MDBBtn>



                    </MDBCardBody>
                </MDBCard>
            </form>

        </MDBContainer>
    );
}

export default Register;