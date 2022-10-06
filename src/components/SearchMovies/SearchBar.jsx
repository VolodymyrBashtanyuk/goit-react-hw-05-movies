import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    setSearchName(value.trim());
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(searchName.toLowerCase());
    setSearchName('');
    // setSearchParams({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          autoComplete="off"
          onChange={handleChange}
          value={searchName}
          autoFocus
          placeholder="Search movie"
        />
      </label>
    </form>
  );
};
