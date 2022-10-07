// import { useEffect } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApiCast } from 'serviceApi/ServiceApi';
import { CastList } from './CastList';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const credits = 'credits';

  useEffect(() => {
    fetchCast();
  }, []);

  const fetchCast = async () => {
    setLoading(true);
    // setError('');

    try {
      const api = await ApiCast(movieId, credits);
      setCast(api);
    } catch (e) {
      //   setError(e);
    } finally {
      setLoading(false);
    }
  };
  // console.log(cast);

  return (
    <>
      {loading && <Loader />}
      {cast !== null && <CastList list={cast} />}
    </>
  );
};
