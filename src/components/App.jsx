import { Component } from "react"
import {Title1, Title2} from './Title/Titles.styled.jsx'
import ContactForm from "./Form/ContactForm";
import ContactList from "./ContactsList/ContactsList.jsx";
import Filter from "./Filter/Filter.jsx";
import { nanoid } from 'nanoid'

 class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    ],
    filter: '',
  };

  onFormSubmit({name, number}){
    const contact= {
      id: nanoid(7),
      name,
      number
    };
  this.setState(({contacts}) => ({
    contacts: [contact, ...contacts],
  }))
  }

  onDeleteContact(contactId){
    this.setState(({contacts})=> ({
    contacts: contacts.filter(({id}) => id !== contactId)
  })
    )
console.log(this.state);
  }

  handleFilter(message){
    this.setState({filter: message})}

  findContact(){
    const {contacts, filter} = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }


  render(){
    const foundContacts = this.findContact();
  return (
    <>
  <Title1>Phonebook</Title1>
  <ContactForm onSubmit={this.onFormSubmit.bind(this)}/>

  <Title2>Contacts</Title2>
  <Filter onChange={this.handleFilter.bind(this)}/> 
  <ContactList contacts={foundContacts} handleDelete={this.onDeleteContact.bind(this)}/>
    </>
  )}
};
export { App };