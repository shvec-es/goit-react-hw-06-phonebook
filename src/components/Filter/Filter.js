import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TextFilter, Input } from 'styles';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <>
      <TextFilter>Find contacts by name</TextFilter>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
