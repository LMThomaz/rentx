import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { useNavigate } from '../../../hooks/useNavigate';
import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  SubTitle,
  Title,
} from './styles';

export function FirstStep() {
  const navigation = useNavigate();
  function handleBack() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>
          <Title>Crie sua conta{'\n'}conta</Title>
          <SubTitle>Faça seu cadastro de{'\n'}forma rápida e fácil</SubTitle>
          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input iconName='user' placeholder='Nome' />
            <Input iconName='mail' placeholder='E-mail' />
            <Input iconName='credit-card' placeholder='CNH' />
            <Button title='Próximo' />
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
