import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import css from './ContactList.module.css';

import Contact from '../Contact/Contact';
import {
  // selectContacts,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
