export type contactDetailsReceiveType = {
    id:string
}


export type contact = {
    id:string,
    name:string,
    email:string,
  }

export type contacts ={
    contacts:contact[]
}
  

export type SetContact = {
    setContacts:React.Dispatch<React.SetStateAction<contact[]>>
}
