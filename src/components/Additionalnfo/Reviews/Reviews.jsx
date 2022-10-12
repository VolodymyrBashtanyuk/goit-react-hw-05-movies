import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApiReviews } from 'serviceApi/ServiceApi';
import { Loader } from 'components/Loader/Loader';
import { ReviewsList } from './ReviewsList';

const Reviews = () => {
  const [review, setReview] = useState(null);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  const reviews = 'reviews';

  useEffect(() => {
    fetchreviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchreviews = async () => {
    setError(false);

    try {
      const api = await ApiReviews(movieId, reviews);
      setReview(api);
    } catch (e) {
      setError(true);
    } finally {
    }
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        {error && <p>Sorry ( please try again</p>}
        {review !== null && <ReviewsList data={review} />}
      </Suspense>
    </>
  );
};

export default Reviews;
