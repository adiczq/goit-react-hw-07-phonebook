import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export function App() {
  return (
    <div className={css.container}>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
