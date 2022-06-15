import { Container } from './styles';

interface Props {
  active?: boolean;
}

export function Bullet(props: Props) {
  const { active = false } = props;

  return <Container active={active} />;
}
