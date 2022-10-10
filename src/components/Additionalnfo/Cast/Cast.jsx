import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApiCast } from 'serviceApi/ServiceApi';
import { CastList } from './CastList';
// import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  const credits = 'credits';

  useEffect(() => {
    fetchCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCast = async () => {
    // setLoading(true);
    setError(false);

    try {
      const api = await ApiCast(movieId, credits);
      setCast(api);
    } catch (e) {
      setError(true);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <>
      {/* {loading && <Loader />} */}
      {error && <p>Sorry ( please try again</p>}
      {cast !== null && <CastList list={cast} />}
    </>
  );
};

export default Cast;
