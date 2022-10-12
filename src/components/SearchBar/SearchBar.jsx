import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { IconContext } from 'react-icons';

import { Form, Input, Button } from './SearchBarStyle';

export const SearchBar = ({ onSubmit, params }) => {
  const [searchName, setSearchName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    params(searchParams.get('query'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    setSearchParams(value !== '' && { query: value });
    setSearchName(value.trim());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(searchName.toLowerCase());
    setSearchName('');
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

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  params: PropTypes.func.isRequired,
};
