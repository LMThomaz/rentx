import { useTheme } from 'styled-components';
import { Container, Title } from './styles';

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
}

export function Button({ title, color, onPress, enabled = true }: Props) {
  const theme = useTheme();

  return (
    <Container
      enabled={enabled}
      color={color ? color : theme.colors.main}
      onPress={onPress}
      style={{ opacity: enabled ? 1 : 0.5 }}>
      <Title>{title}</Title>
    </Container>
  );
}
