import {
  getItems,
  getTotalContacts,
  getLoader,
} from '../../redux/phonebook/selectors/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from '../../redux/phonebook/slices/phonebookSlice';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Filter from '../../Components/Filter/Filter';
import ContactList from '../../Components/ContactList/ContactList';
import Loader from 'react-loader-spinner';

export default function ContactsView() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => getItems(state));
  const totalContacts = useSelector(state => getTotalContacts(state));
  const loading = useSelector(state => getLoader(state));

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      {contacts.length !== 0 ? (
        <>
          <h2>Total contacts: {totalContacts}</h2>
          <Filter />
        </>
      ) : (
        <h2>Phonebook is empty</h2>
      )}
      <ContactList />
      {loading && (
        <Loader
          type="ThreeDots"
          color="#363636"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
    </>
  );
}
