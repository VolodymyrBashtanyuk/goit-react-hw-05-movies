import { CirclesWithBar} from 'react-loader-spinner';

export const Loader = () => {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color="#7265ec"
      wrapperStyle={{}}
      wrapperClass="loading"
      visible={true}
      outerCircleColor=""
      innerCircleColor=""
      barColor=""
      ariaLabel="circles-with-bar-loading"
    />
  );
};
