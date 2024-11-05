import React from 'react'

function ContactInput({name, placeholder, inputType}) {
  return (
    <div className="formGroup">
        <label htmlFor={name} hidden>{placeholder}</label>
        <input type={inputType} name={name} id={name} placeholder={placeholder} required />
    </div>
  )
}

export default ContactInput