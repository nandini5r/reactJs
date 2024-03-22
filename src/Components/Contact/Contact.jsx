import React from 'react'
import ContactBanner from './Contact-banner/ContactBanner'
import ContactInfo from './Contact-info/ContactInfo'
import ContactForm from './Contact-form/ContactForm'

const Contact = () => {
  return (
    <div>
    <ContactBanner/>
    <ContactInfo/>
    <ContactForm/>
    </div>
  )
}

export default Contact