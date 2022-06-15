import { useTheme } from 'styled-components';
import { ActivityIndicator } from 'react-native';
import { Container, Title } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false,
}: Props) {
  const theme = useTheme();

  return (
    <Container
      enabled={enabled}
      color={color ? color : theme.colors.main}
      onPress={onPress}
      style={{ opacity: !enabled || loading ? 0.5 : 1 }}>
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
