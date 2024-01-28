import React from 'react'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
import { contacts } from './types'

export default function Contact({contacts}:contacts) {
  return (
   <>
    <ContactList contacts={contacts} />
    <ContactDetails id={'5'} />
   </>
  )
}
