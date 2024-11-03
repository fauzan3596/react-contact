import React, { useState } from 'react'

function ContactInput(props) {
    const { addContact } = props
    const [name, setName] = useState('')
    const [tag, setTag] = useState('')

    const onNameChangeEventHandler = (event) => {
        setName(event.target.value)
    }

    const onTagChangeEventHandler = (event) => {
        setTag(event.target.value)
    }

    const onSubmitEventHandler = (event) => {
        const newContact = {
            name, tag
        }
        event.preventDefault()
        addContact(newContact)
    }

  return (
    <form className='contact-input' onSubmit={onSubmitEventHandler}>
        <input type="text" placeholder='Nama' value={name} onChange={onNameChangeEventHandler}/>
        <input type="text" placeholder='Tag' value={tag} onChange={onTagChangeEventHandler}/>
        <button type='submit'>Tambah</button>
    </form>
  )
}

export default ContactInput