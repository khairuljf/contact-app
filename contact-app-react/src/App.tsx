import React, { useEffect, useState, useId } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api/contacts'
import { Button } from 'antd';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddContactForm from './components/AddContact';
import Contact from './components/Contact';
import { contact } from './components/types';


function App() {


const id = useId()

const [contacts, setContacts] = useState<contact[]>([]);
const [contactId, setContactId] = useState<string>();


const filterContact = ( name: string) =>{
    console.log(name)

    const filterContact =  contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));


    setContacts(filterContact);

}





// Retrieve contacts
const retriveContacts =  async () =>{
  const response  = await api.get("/contacts")
  return response.data;
}

useEffect(()=>{

  const getAllContact = async () =>{
    const allContact  =  await retriveContacts()

    if(allContact) {
      setContacts((prevState)=>allContact)
    }
  }

  getAllContact();
  
},[])




  return (
    <div className="app-wrapper">
       <Routes>
          <Route path="/" element={<Contact contacts={contacts} setContactId={setContactId} contactId={contactId} filterContact={filterContact} />} />
          <Route path="/add" element={<AddContactForm setContacts={setContacts} />} />
          <Route path="/edit/:contactId" element={<AddContactForm setContacts={setContacts} />} />
       </Routes>
    </div>
  );
}

export default App;
