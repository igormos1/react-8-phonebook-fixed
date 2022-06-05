import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem';
import s from './contactlist.module.css';


export default function ContactList({ contactsData }) {   

  const filterContacts = useSelector(state =>{
      return contactsData?.filter(contact => {       
        return contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
      })
  })

     return (<ul className={s.list}> 
         {filterContacts?.map(contact => (
             <ContactListItem
                 key={ contact.id }
                 id={ contact.id }
                 name={ contact.name }
                 number={ contact.number }                   
              /> 
         ))}
    </ul>)
};