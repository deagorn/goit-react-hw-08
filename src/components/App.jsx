// import { nanoid } from "nanoid";
// import { useEffect, useState } from "react";
// import ContactList from "./ContactList/ContactList";
// import Filter from "./Filter/Filter";
// import s from './App.module.css'
// import { ContactForm } from "./ContactForm/ContactForm";
// import { TodoList } from "./TodoList/TodoList";

import { TodoList } from "./TodoList/TodoList";


export const App = () => {

// const [contacts, setContacts] = useState(() => {
//     const savedContacts = localStorage.getItem('contacts');
//     return savedContacts ? JSON.parse(savedContacts) : [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ];
//   });
//   const [filter, setFilter] = useState('');

  
  // useEffect(() => {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts) {
  //     setContacts(contacts);
  //   }
  // }, []);
  

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  
  // const handleAddContact = (name, number) => {
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   }

  //    if (contacts.some((contact) => contact.name === name)) {
  //     alert(`${name} is already in contacts. Try again! `);
  //     return;
  //   }

  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // }

  // const deleteContact = (contactId) => {
  //   setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  // };

  // const changeFilter = (e) => {
  //   setFilter(e.target.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const visible = getVisibleContacts();

  return (
    <TodoList />
    // <div className={s.container}>
    //   <h1 className={s.title}>Phonebook</h1>
    //   <ContactForm onSubmit={handleAddContact} />

    //   <h1 className={s.title}>Contacts</h1>
    //   <Filter value={filter} onChange={changeFilter} />
    //   <ContactList contacts={visible} onDeleteContact={deleteContact} />
        
    // </div>
  );
}