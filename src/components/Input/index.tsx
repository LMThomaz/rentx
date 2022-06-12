import { useTheme } from 'styled-components';
import { Container } from './styles';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

export function Input(props: Props) {
  const { iconName, ...rest } = props;
  const theme = useTheme();
  return (
    <Container>
      <Feather name={iconName} size={24} color={theme.colors.text_detail} />
    </Container>
  );
}
