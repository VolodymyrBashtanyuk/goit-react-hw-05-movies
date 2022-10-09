import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ApiSaerch } from 'serviceApi/ServiceApi';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Loader } from 'components/Loader/Loader';

export const MoviesPage = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (name === '') {
      return;
    }
    fethSearch(name);
  }, [name]);

  const fethSearch = async searchName => {
    setLoad(true);
    setError(false);

    try {
      const api = await ApiSaerch(searchName);
      setSearchList(api);
    } catch (e) {
      setError(true);
    } finally {
      setLoad(false);
    }
  };

  const searchSubmit = SearchName => {
    setName(SearchName);
  };
  const checkQuery = param => {
    if (param !== null) {
      setName(param);
    }
  };

  return (
    <>
      <SearchBar onSubmit={searchSubmit} params={checkQuery} />
      {load && <Loader />}
      {error && <p>Sorry ( please try again</p>}
      {name !== '' && <MovieItem items={searchList} />}
    </>
  );
};
