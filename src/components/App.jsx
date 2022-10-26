import { useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from "../redux/selector";
import {ContactForm} from "./Form";
import {ContactList} from "./ContactList";
import { FilterContact } from './ContactFilter';
import  { Title, SubTitle } from "./App.styles";


export const App = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getStatusFilter);
 


  const getFilter = () => {
    if (!filters) {
      return contacts;
    }

    const normalaizedFilter = filters.toLowerCase();

    return contacts.filter(({ name }) => {
      const normalaizedName = name.toLowerCase();
      const result = normalaizedName.includes(normalaizedFilter);
      return result;
    });
  };

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      {contacts.length !== 0 && (
        <>
          <SubTitle>Contacts</SubTitle>
          <FilterContact />
          <ContactList items={getFilter()} />
        </>
      )}
    </>
  );
};
