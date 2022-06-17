import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { PasswordInput } from '../../../components/PasswordInput';
import { useNavigate } from '../../../hooks/useNavigate';
import { api } from '../../../services/api';
import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  SubTitle,
  Title,
} from './styles';

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

export function SecondStep() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const route = useRoute();
  const navigation = useNavigate();
  const theme = useTheme();
  const { user } = route.params as Params;
  function handleBack() {
    navigation.goBack();
  }
  async function handleRegister() {
    if (!password || !confirmPassword) {
      return Alert.alert('Calma!', 'Informe a senha a sua confirmação');
    }
    if (password !== confirmPassword) {
      return Alert.alert('Calma!', 'As senhas não são iguais');
    }
    await api
      .post('/users', {
        name: user.name,
        email: user.email,
        driver_license: user.driverLicense,
        password,
      })
      .then(() => {
        navigation.navigate('Confirmation', {
          nextScreenRoute: 'SignIn',
          title: 'Conta criada!',
          message: `Agora é só fazer login\ne aproveitar`,
        });
      })
      .catch((error) => {
        console.log(error.message);
        Alert.alert('Ops!', 'Não foi possível cadastrar');
      });
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </Header>
          <Title>Crie sua conta{'\n'}conta</Title>
          <SubTitle>Faça seu cadastro de{'\n'}forma rápida e fácil</SubTitle>
          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput
              iconName='lock'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput
              iconName='lock'
              placeholder='Repetir senha'
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />

            <Button
              onPress={handleRegister}
              title='Cadastrar'
              color={theme.colors.success}
            />
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
