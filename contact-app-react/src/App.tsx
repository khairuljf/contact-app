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
import ContactList, { contact } from './components/ContactList';
import AddContactForm from './components/AddContact';
import Contact from './components/Contact';



  




function App() {


const id = useId()

const [contacts, setContacts] = useState<contact[]>([])




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
          <Route path="/" element={<Contact contacts={contacts} />} />
          <Route path="/add" element={<AddContactForm />} />
          <Route path="/edit/:contactId" element={<AddContactForm />} />
       </Routes>
    </div>
  );
}

export default App;
