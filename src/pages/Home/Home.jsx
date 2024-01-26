import { useSelector } from 'react-redux';
import { Title } from './Home.styled';
import { selectName } from 'myRedux';

export const Home = () => {
  const name = useSelector(selectName);
  return (
    <Title>
      Wellcome stranger{name ? `: ${name}` : '! Please register or login!'}
    </Title>
  );
};
