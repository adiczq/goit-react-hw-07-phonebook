import { getFilter } from '../../redux/slices/ContactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const handleFilter = event =>
    dispatch(getFilter(event.currentTarget.value.toLowerCase()));

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="filter">
        Filter by name:
      </label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
}
