import {
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Container, Footer, Form, Header, SubTitle, Title } from './styles';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

export function SignIn() {
  const theme = useTheme();

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle='dark-content'
            translucent
            backgroundColor='transparent'
          />
          <Header>
            <Title>Estamos{'\n'}quase lá.</Title>
            <SubTitle>
              Faça seu login para começar{'\n'}uma experiência incrível.
            </SubTitle>
          </Header>
          <Form>
            <Input
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
            />
            <PasswordInput iconName='lock' placeholder='Senha' />
          </Form>
          <Footer>
            <Button
              title='Login'
              onPress={() => {}}
              enabled={false}
              loading={false}
            />
            <Button
              title='Criar conta gratuita'
              color={theme.colors.background_secondary}
              onPress={() => {}}
              enabled={false}
              loading={false}
              light
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
