import { useSelector, useDispatch } from 'react-redux';
import styles from './filter.module.css';
import { changeFilter } from '../../redux/phonebook/slices/filterSlice';
import { getFilter } from '../../redux/phonebook/selectors/contacts-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => getFilter(state));

  return (
    <>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          onChange={e => dispatch(changeFilter(e.currentTarget.value))}
          value={filterValue}
        />
      </label>
    </>
  );
}
