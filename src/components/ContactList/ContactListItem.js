import React from 'react';
import PropTypes from 'prop-types';
import { Text, ButtonItems } from 'styles';

const ContactListItem = ({ name, number, onClick }) => {
  return (
    <>
      <Text>{name}:</Text>
      <Text>{number}</Text>
      <ButtonItems type="button" onClick={onClick}>
        Delete
      </ButtonItems>
    </>
  );
};

ContactListItem.propTypes = {
  contacs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactListItem;
