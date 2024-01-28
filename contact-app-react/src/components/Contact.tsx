import React from 'react'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
import { contact } from './types'


export type contactProps ={
    contacts:contact[],
    setContactId: React.Dispatch<React.SetStateAction<string | undefined>>
    contactId: string | undefined
}

export default function Contact({contacts, contactId, setContactId}:contactProps) {
  return (
   <>
    <ContactList contacts={contacts} setContactId={setContactId} />
    <ContactDetails contactId={contactId} contacts={contacts} />
   </>
  )
}
