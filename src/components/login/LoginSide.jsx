import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import { userState } from "@store";

import './style.css';

function LoginSide() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ user, setUser ] = useRecoilState(userState);

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value); 
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);        
    };
    
    useEffect(() => {
        setUser({
            isLoggedIn: true,
            userEmail: email,
            userPassword: password
        });
    }, [email, password]);

    return (
        <div className="login-side">
            <div className="sign-title">
                <h4 className="t-sign-title">Sign in to Vaultik</h4>
            </div>
            <form action='/home'>
                <div className="login-form">
                    <div className="input-div">
                        <input type="email" className='log-input' placeholder='Email address' value={email} onChange={handleEmailChange} required />
                    </div>
                    <div className="input-div">
                        <input type="password" className='log-input' placeholder='Password' value={password} onChange={handlePasswordChange} required />
                    </div>
                    <a href="/">
                        <p  className='fg-pass'>Forgot password?</p>
                    </a>
                    <button type='submit' className='log-submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginSide;