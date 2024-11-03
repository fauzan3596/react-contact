import React from 'react'
import ContactItemImage from './ContactItemImage'
import ContactItemBody from './ContactItemBody'
import DeleteButton from './DeleteButton'

function ContactItem(props) {
    const {link, name, tag, id, onDelete} = props
  return (
    <div className='contact-item'>
        <ContactItemImage link={link} />
        <ContactItemBody name={name} tag={tag} />
        <DeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}

export default ContactItem