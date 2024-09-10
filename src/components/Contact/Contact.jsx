import { useState } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

import css from './Contact.module.css';

import { deleteContact } from '../../redux/contacts/operations';

Modal.setAppElement('#root');

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    const contactId = id;
    closeModal();
    dispatch(deleteContact(contactId));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
      <button className={css.deleteButton} onClick={openModal}>
        Delete
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Deletion"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <h2>Are you sure you want to delete this contact?</h2>
        <div className={css.buttonContainer}>
          <button className={css.deleteButton} onClick={handleDelete}>
            Yes, delete
          </button>
          <button className={css.deleteButton} onClick={closeModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
