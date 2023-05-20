import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'service/contactData';
import {
  selectFilteredContacts,
  selectContacts,
} from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContact } from 'service/contactData';
import css from './ContactList.module.css'

export const ContactList = () => {
  const filterValue = useSelector(selectFilteredContacts).toLowerCase();
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);


  const filterContactsList = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterValue);
  });
  return (
    <div>
      <ul className={css.list}>
        {filterContactsList.map(contact => (
          <li className={css.item} key={nanoid()}>
            {contact.name}: {contact.number}
            <button
              className={css.button}
              type="button"
              onClick={() => dispatch(removeContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;