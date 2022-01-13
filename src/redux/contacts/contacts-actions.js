import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/AddContact',
  ({ name, number }) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  },
);

export const deleteContact = createAction('contacts/DeleteContact');
export const changeFilter = createAction('contacts/ChangeFilter');
