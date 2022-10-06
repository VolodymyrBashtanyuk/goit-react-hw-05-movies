import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { ApiSaerch } from 'serviceApi/ServiceApi';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { LoadSaerch } from 'components/Loader/Loader';

export const SearchMovies = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (name === '') {
      return;
    }
    fethSearch();
  }, [name]);

  const fethSearch = async () => {
    setLoad(true);
    setError('');

    try {
      const api = await ApiSaerch(name);
      setSearchList(api);
    } catch (e) {
      setError(e);
    } finally {
      setLoad(false);
    }
  };

  const searchSubmit = SearchName => {
    setName(SearchName);
  };

  return (
    <>
      <SearchBar onSubmit={searchSubmit} />
      {load && <LoadSaerch />}
      {name !== '' && <MovieItem items={searchList} />}
    </>
  );
};
