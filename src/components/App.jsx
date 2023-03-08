import { Component } from "react"
import {Title1, Title2} from './Title/Titles.styled.jsx'
import ContactForm from "./Form/ContactForm";
import ContactList from "./ContactsList/ContactsList.jsx";
import Filter from "./Filter/Filter.jsx";
import { nanoid } from 'nanoid'

 class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onFormSubmit({name, number}){
    const someName = this.state.contacts.filter(contact=> contact.name.toLowerCase() === name.toLowerCase())
    if(someName.length === 1){
     alert(`${name} is already in contacts.`)
     return;
    }
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
    ) }

  handleFilter(e){
    this.setState({filter: e.target.value})}

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
  <Filter value={ this.state.filter } onChange={this.handleFilter.bind(this)}/> 
  <ContactList contacts={foundContacts} handleDelete={this.onDeleteContact.bind(this)}/>
    </>
  )}
};
export { App };

