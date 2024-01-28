import React, { useEffect, useState, useId } from 'react';
import logo from './logo.svg';
import api from '../api/contacts'
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export type contact = {
  id:string,
  name:string,
  email:string,
}


function App() {


  
}




export default function ContactList() {
    const id = useId()

    const [contacts, setContacts] = useState<contact[]>([])
  
  
  
  
    // Retrieve contacts
    const retriveContacts =  async () =>{
      const response  = await api.get("/contacts")
      return response.data;
    }
  
    // Add contact
  
    const addContactHandler = async (contact:any) =>{
        console.log(contact)
        const request  =  {
          id:id,
          ...contact
        }
  
        const response = await api.post("/contacts",request)
  
        //setContact((prevState)=>{prevState, ...contact })
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
      <div className="contact-list">
          <div className='search'>  
            <input type='text' placeholder='Search contact' />
            <Link to={'/add/'} >Add Contact</Link>
          </div>
        <div className='contacts'>
        
          <ul>
            {
              contacts?.map((contact:contact, index)=>{
                return (<li key={index}>{contact?.name}</li>)
              })
            }
            </ul>
        </div>
      </div>
    );
}