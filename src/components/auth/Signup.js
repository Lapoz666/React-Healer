import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import image from "../../images/medical-logo-maker-6.png";

function Register() {
    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [passwordConf, setPasswordConf] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    var navigate = useNavigate();
    function registerUser(){
        var user = {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConf
        }
        axios.post('https://medicalstore.mashupstack.com/api/register',user).then((response)=>{
            setErrorMessage('');
            navigate('/login');
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            }else{
                setErrorMessage('Failed to connect to api');
            }
        })
    }
    return <div>
        <div className="container ">
        <div className='background-image'></div>
        <div className='man'>
            <div className="row mt-5">
            <div className="col-1"></div>
                <div className="col-6 offset-2">
                <div className="card bg-light">
                <div className="mx-5">
                <div className="card-body">
                <div className="text-center">
                <img src={image} alt="Logo" style={{ height: '40px', marginRight: '10px' }} /><span style={{ fontSize: 'larger' }}><b>HEALER</b></span>
            </div>
                    <h3 className="text-center">Sign Up</h3>
                    {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                    <div className="form-group">
                        <label><b>Name:</b></label>
                        <input type="text"
                        className="form-control"
                        value={name}
                        onInput={(event)=>setName(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label><b>Email:</b></label>
                        <input type="text"
                        className="form-control"
                        value={email}
                        onInput={(event)=>setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label><b>Password:</b></label>
                        <input type="password"
                        className="form-control"
                        value={password}
                        onInput={(event)=>setPassword(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label><b>Confirm Password:</b></label>
                        <input type="password"
                        className="form-control"
                        value={passwordConf}
                        onInput={(event)=>setPasswordConf(event.target.value)}
                        />
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <button className="btn btn-success btn-lg " onClick={registerUser}>Submit</button>
                    </div>
                </div><div className="col-2"></div>
                <p className="mx-5">Already have an account?.<a href="/login"><b>Login</b></a></p>
            </div></div>
        </div></div></div>
    </div></div>
}

export default Register;