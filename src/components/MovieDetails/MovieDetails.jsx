const imageURL = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = ({ data }) => {
  console.log(data);

  const { title, poster_path, overview, genres } = data;

  const genre = genres.map(({ id, name }) => {
    return <p key={id}>{name}</p>;
  });

  return (
    <div>
      <img src={`${imageURL}${poster_path}`} alt={title} />
      <h1>{title}</h1>
      <p>User Score</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genre}
    </div>
  );
};

// https://www.netflix.com/title/80174263/jOgbnL5FB30pprEjZaY1E1iPtPM.jpg
