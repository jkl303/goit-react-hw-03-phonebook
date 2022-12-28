export const Contact = ({contact, onDelete}) => {
  return (<><p>{contact.name}</p>
    <p>{contact.number}</p>
    <button onClick={() => onDelete(contact.id)}>Delete contact</button></>)
        }