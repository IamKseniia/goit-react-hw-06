import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const getVisibleContacts = (contacts, nameFilter) => {
  if (!nameFilter) {
    return contacts;
  }

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const nameFilter = useSelector(state => state.filters.filters.name);
  const visibleContacts = getVisibleContacts(contacts, nameFilter);

  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
