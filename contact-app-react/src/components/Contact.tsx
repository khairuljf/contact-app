import React from 'react'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'

export default function Contact() {
  return (
   <>
    <ContactList />
    <ContactDetails id={'5'} />
   </>
  )
}
