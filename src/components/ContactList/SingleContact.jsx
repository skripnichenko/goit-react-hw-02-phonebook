import React from 'react';
import PropTypes from "prop-types";

const SingleContact = ({ name = '', number = '', id = '', deleteContact }) => {
    return (
        <li>{name + ' ' + number} <button value={id} onClick={deleteContact}>Delete</button></li>
    )
}

SingleContact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default SingleContact