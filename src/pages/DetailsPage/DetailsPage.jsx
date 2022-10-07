import { ApiDetails } from 'serviceApi/ServiceApi';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Loader } from 'components/Loader/Loader';
// import { Link } from 'react-router-dom';
import { HiChevronDoubleLeft } from 'react-icons/hi';

export const DetailsPage = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const navigate = useNavigate();

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

  const goBack = () => {
    navigate('/');
  };

  return (
    <>
      {loading && <Loader loading={loading} />}
      <button onClick={goBack}>
        <HiChevronDoubleLeft />
        go back
      </button>
      {details !== null && <MovieDetails data={details} />}
    </>
  );
};
