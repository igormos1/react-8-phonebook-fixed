import { useState } from "react";
import { useDispatch } from "react-redux";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { authOperations } from "redux/auth";
import Container from "components/Container";
import s from './RegisterPage.module.css';


export default function RegisterPage() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    console.log(name)


    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
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
        
        dispatch(authOperations.register({ name, email, password }));

        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <Container>
                <h1>RegisterPage</h1>

                <form onSubmit={handleSubmit} className={s.form}>
                    <label className={s.label}>
                        Name
                        <input
                        className={s.input}
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}                        
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                    </label>

                    <label className={s.label}>
                        Email
                    <input
                        className={s.input} type="email"
                        name="email"
                        value={email}
                        onChange={handleChange} />
                    </label>

                    <label className={s.label}>
                        Password
                    <input
                        className={s.input}
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange} />
                    </label>

                   <Stack spacing={2} direction="row">
                        <Button type="submit"
                            variant="contained"                           
                            >  Register                          
                        </Button>
                    </Stack>
                </form>
            </Container>
        </div>
    );
};