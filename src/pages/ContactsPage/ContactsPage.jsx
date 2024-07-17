import css from './ContactsPage.module.css';

import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <div>
      <h2 className={css.title}>Your phonebook</h2>
      <div className={css.container}>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
