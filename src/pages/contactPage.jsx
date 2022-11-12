import React from 'react'
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/Form/Form';
import { FilterContact } from '../components/ContactsFilter/ContactFilter';
import { Container } from '../components/App/App.styles';


export default function Contacts() {
 
  return (
      <div>
        <Container>
             <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <FilterContact  />
            <ContactList />
        </Container>
      </div>
  )
}