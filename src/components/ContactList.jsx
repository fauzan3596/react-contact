import React from 'react'
import ContactItem from './ContactItem'

function ContactList(props) {
    const {contacts, onDelete} = props
    return (
        <div className='contact-list'>
            {
                contacts.map(contact => (
                    <ContactItem 
                    {...contact} 
                    key={contact.id} 
                    id={contact.id}
                    onDelete={onDelete} />
                )
                )
            }
        </div>
    )
}

export default ContactList