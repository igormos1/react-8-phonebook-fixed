import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactFilter } from '../../redux/actions';
import s from './filter.module.css';


export default function Filter() {
    
    const dispatch = useDispatch();
    const value = useSelector(state => state.contacts.filter);

    return (
        <div className={s.filter}>
            <label>
                Find contact by name
            </label>
            <input className={s.input} onChange={event => {
                // console.log(value)
                dispatch(contactFilter(event.target.value))
            }} value={ value } type="text" name="filter"/>
        </div>
    )
};