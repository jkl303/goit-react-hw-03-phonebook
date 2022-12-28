import { Contact } from "components/Contact/Contact"
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => { return (<ul>{contacts.map(contact => { return (<li key={contact.id}><Contact contact={contact} onDelete={onDelete}></Contact></li>) })}</ul>) }

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};