import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ApiSaerch } from 'serviceApi/ServiceApi';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Loader } from 'components/Loader/Loader';
import { Note } from './MoviesPageStyle';

export const MoviesPage = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [load, setLoad] = useState(false);
  const [note, setNote] = useState(false);

  useEffect(() => {
    if (name === '') {
      return;
    }
    fethSearch(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const fethSearch = async searchName => {
    setLoad(true);
    setError(false);
    setNote(false);

    try {
      const api = await ApiSaerch(searchName);
      setSearchList(api);
      notification(api);
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

  const notification = data => {
    if (data.length === 0) {
      setNote(true);
    }
  };

  return (
    <>
      <SearchBar onSubmit={searchSubmit} params={checkQuery} />
      {load && <Loader />}
      {error && <p>Sorry ( please try again</p>}
      {name !== '' && <MovieItem items={searchList} />}
      {note && <Note>Sorry :( no movies name {name}</Note>}
    </>
  );
};
