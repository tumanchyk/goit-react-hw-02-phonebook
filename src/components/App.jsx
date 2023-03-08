import { Component } from "react"
import { Container } from "./Styles/Container.styled.jsx";
import {Title1, Title2} from './Styles/Titles.styled.jsx'
import { ContactForm } from "./Form/ContactForm";
import ContactList from "./ContactsList/ContactsList.jsx";
import Filter from "./Filter/Filter.jsx";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
 class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onFormSubmit(contact){
    const someName = this.state.contacts.filter(item=> contact.name.toLowerCase() === item.name.toLowerCase())
    if(someName.length === 1){
      Notify.failure(`${contact.name} is already in contacts.`);
     return;
    }
    
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
    <Container>
  <Title1>Phonebook</Title1>
  <ContactForm onSubmit={this.onFormSubmit.bind(this)}/>

  <Title2>Contacts</Title2>
  <Filter value={ this.state.filter } onChange={this.handleFilter.bind(this)}/> 
  <ContactList contacts={foundContacts} handleDelete={this.onDeleteContact.bind(this)}/>
    </Container>
  )}
};
export { App };

