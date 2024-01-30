import { useSelector } from 'react-redux';

import { selectName } from 'myRedux';

import { Title } from './Home.styled';

const Home = () => {
  const name = useSelector(selectName);
  return (
    <Title>
      Wellcome stranger{name ? `: ${name}` : '! Please register or login!'}
    </Title>
  );
};
export default Home;
