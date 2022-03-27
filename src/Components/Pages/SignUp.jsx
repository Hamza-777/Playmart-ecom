import React, { useState } from 'react';
import '../Styles/LoginSignup.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [ typePass, setTypePass ] = useState('password');
    const [ typePassConf, setTypePassConf ] = useState('password');
    const [ eyePass, setEyePass ] = useState('fa-eye');
    const [ eyePassConf, setEyePassConf ] = useState('fa-eye');
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, password, confirmPassword } = formData;

    const changeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const submitHandler = async e => {
        setFormData({ ...formData, name: '', email: '', password: '', confirmPassword: '' });
        e.preventDefault();
    }

    const toggleTypePass = e => {
        typePass === 'password' ? setTypePass('text') : setTypePass('password');
        setEyePass(eyePass === 'fa-eye' ? 'fa-eye-slash' : 'fa-eye');
    }

    const toggleTypePassConf = e => {
        typePassConf === 'password' ? setTypePassConf('text') : setTypePassConf('password');
        setEyePassConf(eyePassConf === 'fa-eye' ? 'fa-eye-slash' : 'fa-eye');
    }

    return (
        <main className="main">
            <div className="form-container flex flex-col align-stretch">
                <h2 className="form-title">SIGNUP</h2>
                <form className="login-signup-form flex flex-col align-center" onSubmit={submitHandler}>
                    <div className="form-item flex flex-col align-start">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter your name" name="name" value={name} onChange={changeHandler} />
                    </div>
                    <div className="form-item flex flex-col align-start">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your email" name="email" value={email} onChange={changeHandler} />
                    </div>
                    <div className="form-item flex flex-col align-start">
                        <label htmlFor="password">Password</label>
                        <div className="pass">
                            <input type={typePass} placeholder="Enter your password" className="password pass1" name="password" value={password} onChange={changeHandler} />
                            <i className={`far ${eyePass} togglePassword`} onClick={toggleTypePass}></i>
                        </div>
                    </div>
                    <div className="form-item flex flex-col align-start">
                        <label htmlFor="password">Confirm Password</label>
                        <div className="pass">
                            <input type={typePassConf} placeholder="Confirm your password" className="password pass2" name="confirmPassword" value={confirmPassword} onChange={changeHandler} />
                            <i className={`far ${eyePassConf} togglePassword`} onClick={toggleTypePassConf}></i>
                        </div>
                    </div>
                    <div className="form-item flex flex-col align-start">
                        <input type="submit" value="SIGNUP" />
                    </div>
                </form>
                <Link to="/login" className="btn btn-link">Already have an account? LogIn &#10095;</Link>
            </div>
        </main>
    )
}

export default SignUp