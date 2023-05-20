import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const PhoneBook = () => {
  return (
    <div>
      <br />
      <ContactForm />
      <br />
      <Filter />
      <br />
      <ContactList />
    </div>
  );
};

export default PhoneBook;