import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');
export const delContact = createAction('contacts/del');
export const contactFilter = createAction('contacts/contactFilter');