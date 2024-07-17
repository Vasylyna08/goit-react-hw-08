import css from './RegistrationPage.module.css';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className={css.contactForm}>
      <h2 className={css.title}>Registration</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
