import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { setNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const filters = useSelector(state => state.filters.filters.name);
  const dispatch = useDispatch();

  return (
    <div className={s.searchBox}>
      <label>
        Find contacts by name
        <input
          className={s.input}
          name="search"
          type="text"
          value={filters}
          onChange={event => {
            const action = setNameFilter(event.target.value);
            dispatch(action);
          }}
        />
      </label>
    </div>
  );
};

export default SearchBox;
