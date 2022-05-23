import { Container } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

interface Props {
  color?: string;
}

export function BackButton({ color }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <MaterialIcons
        name='chevron-left'
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
