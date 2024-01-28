import React, { useEffect, useState, useId } from 'react';
import logo from './logo.svg';
import api from '../api/contacts'
import { Button } from 'antd';

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
      <div className="App">
      
        <div>
        <Button type="primary">Primary Button</Button>
  
          <ul>
            {
              contacts?.map((contact:contact)=>{
                return (<li>{contact?.name}</li>)
              })
            }
            </ul>
        </div>
      </div>
    );
}