import React, { useEffect, useState, useId } from 'react';
import logo from './logo.svg';
import api from '../api/contacts'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { contacts } from './types';

export type contact = {
  id:string,
  name:string,
  email:string,
}


function App() {


  
}




export default function ContactList({contacts}:contacts) {

  
  
    
  
  
  
  
  
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