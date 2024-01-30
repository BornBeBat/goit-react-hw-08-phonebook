import { Audio, Oval, Triangle } from 'react-loader-spinner';

export const Loader = ({ loaderType }) => {
  switch (loaderType) {
    case 'oval':
      return (
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{
            display: 'flex',
            width: '98vw',
            height: '95vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      );
    case 'audio':
      return (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="cyan"
          ariaLabel="loading"
          wrapperStyle={{
            display: 'flex',
            width: '100%',

            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      );

    case 'isRefreshing':
      return (
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      );

    default:
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
  }
};
