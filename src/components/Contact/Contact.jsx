import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import css from './Contact.module.css';

import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const contactId = id;
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.contactContainer}>
      <div className={css.contactInfo}>
        <p className={css.contactInfoItem}>
          <IoPersonSharp size={16} />
          <span>{name}</span>
        </p>
        <p className={css.contactInfoItem}>
          <FaPhone size={16} />
          <span>{number}</span>
        </p>
      </div>
      <button className={css.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
