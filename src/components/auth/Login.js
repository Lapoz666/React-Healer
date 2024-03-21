import axios from "axios";
import { useState } from "react";
import image from "../../images/medical-logo-maker-6.png";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import {useNavigate} from "react-router-dom";
import checkGuest from "./checkGuest";

function Login() {
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function attemptLogin() {
        axios.post('https://medicalstore.mashupstack.com/api/login',{
            email:email,
            password:password
        }).then(response=>{
            setErrorMessage('')
            var user = {
                email:email,
                token:response.data.token
            }
            dispatch(setUser(user));
    navigate("/home");
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(''))
            }else if(error.response.data.message){
                setErrorMessage(error.response.data.message)
            }else{
                setErrorMessage('Failed to login user. Please contact admin')
            }
        })
    }
    return (<div>
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
                    <h3>Login</h3>
                    {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
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
                    <div className="form-group d-flex justify-content-center">
                        <button className="btn btn-success btn-lg" onClick={attemptLogin}>Login</button>
                    </div>
                    <p className="mx-5">Don't have an account?.<a href="/"><b>Signup</b></a></p>
                </div></div>
            </div></div>
        </div></div></div>
    </div>)
}

export default checkGuest(Login);