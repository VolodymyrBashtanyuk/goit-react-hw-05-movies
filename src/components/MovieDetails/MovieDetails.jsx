import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import {
  Wrapper,
  LinkToBack,
  Img,
  Title,
  SubTitle,
  Text,
  Genre,
} from './MovieDetailsStyle';
import { HiChevronDoubleLeft } from 'react-icons/hi';

const imageUrl = 'https://image.tmdb.org/t/p/w300';

export const MovieDetails = ({ data }) => {
  const { title, release_date, poster_path, overview, genres, vote_average } =
    data;

  const year = new Date(release_date);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const genre = genres.map(({ id, name }) => {
    return <Genre key={id}>{name}</Genre>;
  });

  // const goBack = () => {
  //   // navigate(-1, { replace: true });
  // };

  return (
    <>
      <LinkToBack to={location.state.from}>
        <HiChevronDoubleLeft />
        Go back
      </LinkToBack>
      <Wrapper>
        <Img src={`${imageUrl}${poster_path}`} alt={title} />
        <div>
          <Title>
            {title} ({year.getFullYear()})
          </Title>
          <Text>User Score: {Math.round(vote_average * 10)}%</Text>
          <SubTitle>Overview</SubTitle>
          <Text>{overview}</Text>
          <SubTitle>Genres</SubTitle>
          {genre}
        </div>
      </Wrapper>
    </>
  );
};
