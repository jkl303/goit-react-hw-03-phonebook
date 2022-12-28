import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    if (contacts.length > 0 && contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`)
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id: nanoid(), name: name, number: number }]
      }))
    }
  }

  filter = (val) => {
    this.setState({ filter: val });
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const renderedContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter))
    
    return (<div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.addContact}></ContactForm>

      <h2>Contacts</h2>
      <Filter onChange={this.filter}></Filter>
      <ContactList contacts={renderedContacts} onDelete={this.deleteContact}></ContactList>
    </div>
    )
  }
}
