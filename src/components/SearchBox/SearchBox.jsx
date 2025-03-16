import s from './SearchBox.module.css';

const SearchBox = ({ inputValue, setInputValue }) => {
  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  return (
    <div className={s.searchBox}>
      <label>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
