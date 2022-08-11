import React from 'react';
import PropTypes from "prop-types";
import SingleContact from './SingleContact';

const ContactList = ({ contacts = [], deleteContact }) => {
  return (
    <ul>
      {contacts.map(el => {
        const {name = '', number = '', id = ''} = el || {};
        return <SingleContact key={id} name={name} number={number} deleteContact={deleteContact} id={id} />
      })}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList