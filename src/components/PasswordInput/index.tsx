import { useTheme } from 'styled-components';
import { Container, IconContainer, InputText } from './styles';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useState } from 'react';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

export function PasswordInput(props: Props) {
  const { iconName, ...rest } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const theme = useTheme();
  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>
      <InputText {...rest} secureTextEntry={isPasswordVisible} />
      <BorderlessButton onPress={handlePasswordVisibilityChange}>
        <IconContainer>
          <Feather
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  );
}
