import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Items } from 'styles';
import ContactListItem from './ContactListItem';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-actions';

const ContactList = () => {
  const items = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteItem = id => dispatch(deleteContact(id));

  return (
    <List>
      {items.map(({ id, name, number }) => (
        <Items key={id}>
          <ContactListItem
            id={id}
            name={name}
            number={number}
            onClick={() => onDeleteItem(id)}
          />
        </Items>
      ))}
    </List>
  );
};

export default ContactList;
