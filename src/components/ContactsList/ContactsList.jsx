import { List, ContactItem, ButtonDelete } from "./Contacts.style"
export default function ContactList ({contacts, handleDelete}){
    return (
        <List>
       { contacts.map(({id, name, number}) => <ContactItem key={id}>{`${name}: ${number}`} <ButtonDelete type="button" onClick={() => handleDelete(id)}>Delete</ButtonDelete></ContactItem>)}
        </List>
    )
}