import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ filteredItems, deleteContact }) => {
  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        {filteredItems.map(({ id, name, number }) => (
          <li key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
