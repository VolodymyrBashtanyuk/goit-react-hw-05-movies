import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { IconContext } from 'react-icons';

import { Form, Input, Button } from './SearchBarStyle';

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
    <Form onSubmit={handleSubmit}>
      <label>
        <Input
          type="text"
          autoComplete="off"
          onChange={handleChange}
          value={searchName}
          autoFocus
          placeholder="Search movie"
        />
      </label>
      <Button type="submit">
        <IconContext.Provider value={{ className: 'icon' }}>
          <ImSearch />
        </IconContext.Provider>
      </Button>
    </Form>
  );
};
