import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useCreateContactMutation } from '../../redux/contactSlice';
import s from './contactform.module.css';

export default function ContactForm({ contactsData }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [addContact, { isLoading: isAdding }] = useCreateContactMutation();  
 
  const handleChange = (event) => {  
  
    const { name, value } = event.target;

    switch (name) {

      case "name": setName(value);
        break;
      
      case "phone": setPhone(value);
        break;
      
      default:
        break;
    }
  };  
 

  const handleSubmit = (event) => {
    event.preventDefault();

    const findContact = contactsData.find(contact => contact.name === name);

    if(findContact){
      alert(`${event.target.name.value} is alredy in contacts`)
      return
    };    
    addContact({ name, phone } );      
    reset();
    };

  const reset = () => {     
    setName("");
    setPhone("");   
  };

    return (
      <form onSubmit={ handleSubmit } className={s.form}>
        <label className={s.label}>
          Name
          <input className={s.input}
            value={ name }
            onChange={ handleChange }
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required        
          />
        </label>
        <label className={s.label}>
          Number
          <input className={s.input}
            value={ phone }
            onChange={ handleChange }
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required 
          />
        </label>
        <Stack spacing={2} direction="row">
          <Button type="submit"
            variant="contained"
            // className={s.formButton}
            disabled={isAdding}>
            {!isAdding ? "Add contact" : "Adding a contact..."}
          </Button>
        </Stack>
      </form>
    );  
};