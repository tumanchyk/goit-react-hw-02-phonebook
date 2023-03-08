import PropTypes from 'prop-types';
import { ContactItem, ButtonDelete } from "./Contacts.style"
export default function ContactList ({contacts, handleDelete}){
    return (
        <ul>
       { contacts.map(({id, name, number}) => <ContactItem key={id}>{`${name}: ${number}`} <ButtonDelete type="button" onClick={() => handleDelete(id)}>Delete</ButtonDelete></ContactItem>)}
        </ul>
    )
}
ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
}