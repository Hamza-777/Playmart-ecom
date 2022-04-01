import React, { useState } from 'react';
import '../Styles/LoginSignup.css';
import { Link, Navigate } from 'react-router-dom';
import { setAuth } from '../Utilities/localStorage';
import { useAuth } from '../Providers/AuthProvider';
import axios from 'axios';
import { unauthorized } from '../Utilities/toasts';

const Login = () => {
    const { dispatchAuth } = useAuth();
    const [ goto, setGoto ] = useState(false);
    const [ type, setType ] = useState('password');
    const [ eye, setEye ] = useState('fa-eye');
    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
        checked: false
    });

    const { email, password, checked } = formData;

    const changeHandler = e => {
        setFormData({ ...formData, [e.target.name]: (e.target.type === 'checkbox' ? e.target.checked : e.target.value) })
    }

    const submitHandler = e => {
        sendReq({
            email,
            password
        }).then(res => {
            dispatchAuth({
                type: 'LOGGED_IN',
                payload: res === undefined ? null : res
            });
            setGoto(res === undefined ? false : true);
        });
        setFormData({ ...formData, email: '', password: '' });
        e.preventDefault();
    }

    const toggleView = e => {
        type === 'password' ? setType('text') : setType('password');
        setEye(eye === 'fa-eye' ? 'fa-eye-slash' : 'fa-eye');
    }

    const sendReq = async (body) => {
        try {
            const response = await axios.post('/api/auth/login', body);
            setAuth(response.data.encodedToken);
            return response.data.encodedToken;
        } catch (err) {
            unauthorized();
        }
    }

    if(goto) {
        return <Navigate to='/' />;
    }

    return (
        <main className="main">
            <div className="form-container flex flex-col align-stretch">
                <h2 className="form-title">LOGIN</h2>
                <form className="login-signup-form flex flex-col align-center" onSubmit={submitHandler}>
                    <div className="form-item flex flex-col align-start">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" value={email} onChange={changeHandler} required />
                    </div>
                    <div className="form-item flex flex-col align-start">
                        <label htmlFor="password">Password</label>
                        <div className="pass">
                            <input type={type} name="password" placeholder="Enter your password" className="password" value={password} onChange={changeHandler} />
                            <i className={`far ${eye} togglePassword`} onClick={toggleView}></i>
                        </div>
                    </div>
                    <div className="form-item flex flex-col align-start misc-inputs">
                        <div className="remember">
                            <input type="checkbox" name="checked" id="remember" checked={checked} onChange={changeHandler} />
                            <label htmlFor="password" className='small'>Remember Me</label>
                        </div>
                        <a href="!#" className="forgot">Forgot password?</a>
                    </div>
                    <div className="form-item flex flex-col align-start">
                        <input type="submit" value="LOGIN" />
                    </div>
                </form>
                <Link to="/signup" className="btn btn-link">Don't have an account? SignUp &#10095;</Link>
            </div>
        </main>
    )
}

export default Login