import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApiReviews } from 'serviceApi/ServiceApi';
import { Loader } from 'components/Loader/Loader';
import { ReviewsList } from './ReviewsList';

export const Reviews = () => {
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const reviews = 'reviews';

  useEffect(() => {
    fetchreviews();
  }, []);

  const fetchreviews = async () => {
    setLoading(true);
    // setError('');

    try {
      const api = await ApiReviews(movieId, reviews);
      setReview(api);
    } catch (e) {
      //   setError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      {review !== null && <ReviewsList data={review} />}
    </>
  );
};
