import React from 'react'

function ContactItemBody(props) {
    const {name, tag} = props;
  return (
    <div className='contact-item-body'>
        <h3 className="contact-item-title">{name}</h3>
        <p className="contact-item-username">@{tag}</p>
    </div>
  )
}

export default ContactItemBody