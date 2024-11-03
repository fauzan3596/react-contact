import React from 'react'

function DeleteButton(props) {
    const {id, onDelete} = props

  return (
    <button className='contact-item-delete' onClick={() => onDelete(id)}>X</button>
  )
}

export default DeleteButton