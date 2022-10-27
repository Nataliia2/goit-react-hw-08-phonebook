import { useSelector } from 'react-redux';
import { getContacts } from "../redux/selector";
import {ContactForm} from "./Form";
import {ContactList} from "./ContactList";
import { FilterContact } from './ContactFilter';
import  { Title, SubTitle } from "./App.styles";



export const App = () => {
  const contacts = useSelector(getContacts);

 


 

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      {contacts.length !== 0 && (
        <>
          <SubTitle>Contacts</SubTitle>
          <FilterContact />
          <ContactList />
        </>
      )}
    </>
  );
};
