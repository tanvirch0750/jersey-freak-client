import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Success
    </div>
  );
};

export default Success;
