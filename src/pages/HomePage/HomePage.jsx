import { ApiTrending } from 'serviceApi/ServiceApi';
import { useState, useEffect } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Error, Title } from './HomePageStyle';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchTreding();
  }, []);

  const fetchTreding = async () => {
    setError(false);

    try {
      const api = await ApiTrending();
      return setMovies(api);
    } catch (e) {
      setError(true);
    } finally {
    }
  };

  return (
    <>
      {movies !== null && (
        <main>
          <Title>Tredding today</Title>
          <MovieItem items={movies} />
        </main>
      )}
      {error && <Error>Please try one more time</Error>}
    </>
  );
};

export default HomePage;
