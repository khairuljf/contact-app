import React from 'react'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
import { contact } from './types'


export type contactProps ={
    contacts:contact[],
    setContactId: React.Dispatch<React.SetStateAction<string | undefined>>,
    contactId: string | undefined,
    filterContact: (name: string) => void
}

export default function Contact({contacts, contactId, setContactId,filterContact}:contactProps) {
  return (
   <>
    <ContactList contacts={contacts} setContactId={setContactId} filterContact={filterContact} />
    <ContactDetails contactId={contactId} contacts={contacts} />
   </>
  )
}
