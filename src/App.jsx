import { useState } from 'react'
import './App.css'
import { getData } from './utils/data'
import ContactList from './components/ContactList'
import ContactInput from './components/ContactInput'

function App() {
  const [contacts, setContacts] = useState(getData())

  const onDeleteHandler = (id) => {
    const newContact = contacts.filter(e => e.id !== id)
    setContacts(newContact)
  }

  const onAddContactHandler = ({ name, tag }) => {
    const newContact = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      tag,
      link: '/images/default.jpg',
    }
    setContacts([...contacts, newContact])
  }

  return (
    <>
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={onAddContactHandler} />
        <h1>Daftar Kontak</h1>
        <ContactList contacts={contacts} onDelete={onDeleteHandler} />
      </div>
    </>
  )
}

export default App
