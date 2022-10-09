import { List, Img, Text } from './CastListStyle';

const imageUrl = 'https://image.tmdb.org/t/p/w200';
const noImage = 'https://s3.amazonaws.com/PARTS.Images/NoImage.jpg';

export const CastList = ({ list }) => {
  const items = list.map(({ id, name, character, profile_path }) => {
    return (
      <li key={id}>
        {profile_path !== null ? (
          <Img src={`${imageUrl}${profile_path}`} alt={name} />
        ) : (
          <Img src={noImage} width="300" height="400" alt={name} />
        )}
        <Text>{name}</Text>
        <Text>Character: {character} </Text>
      </li>
    );
  });
  return <List>{items}</List>;
};
