import PropTypes from 'prop-types';

export const Contact = ({ contact, onDelete }) => {
  return (<><p>{contact.name}</p>
    <p>{contact.number}</p>
    <button onClick={() => onDelete(contact.id)}>Delete contact</button></>)
}
        
Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }),
  onDelete: PropTypes.func.isRequired
};