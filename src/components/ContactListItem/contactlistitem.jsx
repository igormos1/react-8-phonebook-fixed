import * as React from 'react';
// import ReactDOM from 'react-dom';
import { useDeleteContactMutation } from 'redux/contactSlice';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import s from './contactlistitem.module.css';



export default function ContactListItem({ name, number, id }) {
  
const [delContact, { isLoading: isDeleting }] = useDeleteContactMutation();  

    return (<li className={s.listItem} key={ id }>
        {name}:   {number} 
         <Stack direction="row" spacing={2}>
            <Button
            // className={s.listButton}
            variant="outlined" startIcon={<DeleteIcon />}
            onClick={()=>delContact(id)}
            disabled={ isDeleting }        >
            { !isDeleting ? "Delete" : "Deleting..." }             
            </Button>
        </Stack>
    </li>)
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,    
}
