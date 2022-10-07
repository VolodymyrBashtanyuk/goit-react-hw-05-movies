const imageUrl = 'https://image.tmdb.org/t/p/w200';

export const CastList = ({ list }) => {
  const items = list.map(({ id, name, character, profile_path }) => {
    return (
      <li key={id}>
        <img src={`${imageUrl}${profile_path}`} alt={name} />
        <p>{name}</p>
        <p>Character: {character} </p>
      </li>
    );
  });
  return <ul>{items}</ul>;
};
