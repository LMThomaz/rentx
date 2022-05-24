import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
}

export const Button: React.FC<Props> = ({ title, ...rest }) => (
  <Container {...rest}>
    <Title>{title}</Title>
  </Container>
);
