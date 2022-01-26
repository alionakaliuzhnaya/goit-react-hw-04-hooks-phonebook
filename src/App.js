import React, { useEffect,useState } from 'react';
import './App.css';
import ContactForm from "./components/Form/ContactForm"
import ContactList from "./components/contact"
import Filter from "./components/Filter"
import { nanoid } from 'nanoid'
import toast, { Toaster } from 'react-hot-toast';
import {Container,PhonebookTitle,ContactTitle} from "./App.styled"

export default function App() {
  const [contacts,setContacts]=useState(()=>{
    return JSON.parse(window.localStorage.getItem("contacts"))?? [];
  });
  const [filter,setFilter]=useState("");
  
  
  useEffect(()=>{
  window.localStorage.setItem("contacts",JSON.stringify(contacts));
  },[contacts])
  
  const  addContact = ({name,number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
  
    if(contacts.find(contact=>contact.name===name)){
     
      toast.error(`${name} is already in contact`);
      return null;
      
    }
  
    setContacts((prevState) => [contact, ...prevState],
      
      
    );
    toast.success(`Contact ${name} Successfully created!`);
  };
  
  const deleteContact = contactId => {
    setContacts(prevState => 
      prevState.filter(contact => contact.id !== contactId),
    );
  };
  
  
  
  const changeFilter = e => {
    setFilter(e.currentTarget.value );
  }; 
  
    
    const filtredContacts= () => {
    const normalizedFilter = filter.toLowerCase();
     return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
      )}
  
  
    return(
    <Container>
      <PhonebookTitle>PhoneBook</PhonebookTitle>
      <ContactForm submitForm  ={addContact}/>
      <ContactTitle>Contacts</ContactTitle>
      <Filter value={filter} 
      onChange={changeFilter}/>
      <ContactList contacts={filtredContacts()}
      onDeleteContact={deleteContact} />
       <Toaster />
    </Container>
    )
  
  }