import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
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
      </Form>
    </Container>
  );
}
