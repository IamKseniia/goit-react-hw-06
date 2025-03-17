import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const filters = useSelector(state => state.filters.filters.name);
  const dispatch = useDispatch();
  const handleChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={s.searchBox}>
      <label>
        Find contacts by name
        <input
          className={s.input}
          name="search"
          type="text"
          value={filters}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
