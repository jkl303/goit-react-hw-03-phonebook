import { Contact } from "components/Contact/Contact"


export const ContactList = ({ contacts, onDelete }) => { return (<ul>{contacts.map(contact => {return(<li key={contact.id}><Contact contact={contact} onDelete={onDelete}></Contact></li>)})}</ul>) }