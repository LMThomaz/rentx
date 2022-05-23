import { SvgProps } from 'react-native-svg';
import { Container, Name } from './styles';

interface Props {
  name: string;
  icon: React.FC<SvgProps>;
}

export function Accessory(props: Props) {
  const { name, icon: Icon } = props;

  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  );
}
