import * as React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from "components/Container";
import s from './Login.module.css';


export default function LoginPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
        
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
         console.log(`email ${email}`)
          console.log(`password ${ password }`)
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <Container>
                <h1>Please Login</h1>

                <form onSubmit={handleSubmit} className={s.form}>
                <label className={s.label}>
                    Email
                <input className={s.input} type="email" name="email" value={email} onChange={handleChange} />
                </label>

                <label className={s.label}>
                    Password
                <input className={s.input} type="password" name="password" value={password} onChange={handleChange} />
                </label>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" type="submit">
                        Enter
                    </Button>
                </Stack>
                </form>
            </Container>
        </div>
    );

};