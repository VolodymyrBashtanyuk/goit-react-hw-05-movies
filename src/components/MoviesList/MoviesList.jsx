import { ApiTrending } from 'serviceApi/ServiceApi';
import { useState, useEffect } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Loader } from 'components/Loader/Loader';

export const MoviesList = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTreding();
  }, []);

  const fetchTreding = async () => {
    setLoading(true);
    setError('');

    try {
      const api = await ApiTrending();
      return setMovies(api);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader loading={loading} />}
      {movies !== null && <MovieItem items={movies} />}
    </>
  );
};
