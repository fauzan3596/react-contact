import React from 'react'

function ContactItemImage(props) {
    const {link} = props;
  return (
    <div className='contact-item-image'>
        <img src={link} alt='Contact Item Image' />
        {/* <div className='contact-item-image-overlay'>
            <a href={link} target='_blank' rel='noopener noreferrer'>
                <i className='fas fa-external-link-alt'></i>
            </a>
        </div>   */}
    </div>
  )
}

export default ContactItemImage