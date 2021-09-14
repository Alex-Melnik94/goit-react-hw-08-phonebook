import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './contact-form.module.css';
import { addContact } from '../../redux/phonebook/slices/phonebookSlice';
import { getItems } from '../../redux/phonebook/selectors/contacts-selectors';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => getItems(state));
  const dispatch = useDispatch();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    const sameContact = contacts.find(prevContact => prevContact.name === name);

    if (sameContact) {
      resetForm();
      alert(`${sameContact.name} is already in contacts`);
      return;
    }

    const contact = {
      name,
      number,
    };

    dispatch(addContact(contact));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler} autoComplete="off">
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>

      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleNumberChange}
          value={number}
        />
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
