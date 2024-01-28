import React from 'react'
import { contactDetailsReceiveType } from './types'



export default function ContactDetails({id}:contactDetailsReceiveType) {
  
  return (
   <div className='details-wrap'>
         <div>ContactDetails {id} </div>
   </div>
  )
}
