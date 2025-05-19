import React from 'react';
import ContactForm from '../components/ContactForm';
import bgContact from '../assets/home/bg-contact.jpg';

const Contact = () => {
  return (
    <div className="relative">
      <img
        src={bgContact}
        alt="background contact"
        className="absolute inset-0 w-full h-full object-cover opacity-70 md:container"
        loading="lazy"
      />
      <div className="relative pt-8 pb-8 px-1 md:px-4">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
