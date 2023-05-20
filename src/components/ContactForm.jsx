import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'service/contactData';
import { selectContacts } from '../redux/selectors';
import css from './ContactForm.module.css'



export function ContactForm() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsLists = [...contacts];

    if (
      contactsLists.findIndex(
        contact =>
          name.toLowerCase().replace(/ /g, '') ===
          contact.name.toLowerCase().replace(/ /g, '')
      ) !== -1
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ id, name, number }));
      setName('')
      setNumber('')
    }
  };

  const contactsChange = event => { 
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      
      default:return
    }
  }

  const contactSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    onSubmit({name, number});
    form.reset();
    
  };
  
    return (
      <form className={css.contactForm} onSubmit={contactSubmit}>
        <label className={css.title}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            value={name}
            onChange={contactsChange}
          />
        </label>

        <label className={css.title}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone number"
            value={number}
            onChange={contactsChange}
          />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  
}

export default ContactForm;