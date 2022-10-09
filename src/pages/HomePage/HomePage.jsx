import { ApiTrending } from 'serviceApi/ServiceApi';
import { useState, useEffect } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Loader } from 'components/Loader/Loader';
import { Error, Title } from './HomePageStyle';

export const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTreding();
  }, []);

  const fetchTreding = async () => {
    setLoading(true);
    setError(false);

    try {
      const api = await ApiTrending();
      return setMovies(api);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader loading={loading} />}

      {movies !== null && (
        <>
          <Title>Tredding today</Title>
          <MovieItem items={movies} />
        </>
      )}
      {error && <Error>Please try one more time</Error>}
    </>
  );
};
