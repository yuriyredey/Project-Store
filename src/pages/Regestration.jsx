import React, { useEffect, useState } from "react";

const Regestration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDone, setEmailDone] = useState(false);
    const [passwordDone, setPasswordDone] = useState(false);
    const [emailError, setEmailError] = useState('Email can`t be empty');
    const [passwordError, setPasswordError] = useState('Password can`t be empty');
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if(emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email is not correct')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value < 3 || e.target.value > 9) {
            setEmailError('Passwort must be at list 3 sybols & les than 9 symbols')
            if(!e.target.value) {
                setEmailError('Password can`t be empty')
            }
        } else {
            setEmailError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.value) {
            case 'email':
                setEmailDone(true)
                break
            case 'passwrod':
                setPasswordDone(true)
                break
        }
    }

    return (
        <div className='regestration'>
            {(emailDone && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
            <form>
                <h1>Regestration</h1>
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type='text' placeholder='Enter your email...' />
                {(passwordDone && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHadler(e)} name='password' type='password' placeholder='Enter your password...' />
                <button disabled={!formValid} type='submit'>Regestration</button>
            </form>
        </div>
    );
};