import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const [contactData, setContactData] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      return JSON.parse(savedContacts);
    } else {
      return [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
    }
  });

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContactData(savedContacts);
    }
  }, []);

  useEffect(() => {
    if (contactData.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contactData));
    }
  }, [contactData]);

  const filteredItems = contactData.filter(item =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const addContact = ({ name, number }) => {
    const newContactData = {
      id: nanoid(),
      name,
      number,
    };

    setContactData(prevContactData => [...prevContactData, newContactData]);
  };

  const deleteContact = id => {
    setContactData(prevContactData =>
      prevContactData.filter(contact => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox inputValue={inputValue} setInputValue={setInputValue} />
      <ContactList
        contactData={contactData}
        filteredItems={filteredItems}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
