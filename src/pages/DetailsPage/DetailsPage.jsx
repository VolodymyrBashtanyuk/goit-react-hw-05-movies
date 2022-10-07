import { ApiDetails } from 'serviceApi/ServiceApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Loader } from 'components/Loader/Loader';

export const DetailsPage = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    fetchDetails();
  }, [movieId]);

  const fetchDetails = async () => {
    setLoading(true);
    // setError('');

    try {
      const api = await ApiDetails(movieId);
      setDetails(api);
    } catch (e) {
      //   setError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader loading={loading} />}
      <button>go back</button>
      {details !== null && <MovieDetails data={details} />}
    </>
  );
};
