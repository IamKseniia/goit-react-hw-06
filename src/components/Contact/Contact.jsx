import s from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({ id, name, number, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(id);
  };

  return (
    <div className={s.contactBox}>
      <div className={s.data}>
        <p>
          <FaUser />
          {name}
        </p>
        <address>
          <FaPhone />
          {number}
        </address>
      </div>
      <button className={s.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
