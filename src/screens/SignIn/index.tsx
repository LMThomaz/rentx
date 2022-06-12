import { StatusBar } from 'react-native';
import { Container, Footer, Header, SubTitle, Title } from './styles';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';

export function SignIn() {
  const theme = useTheme();

  return (
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
  );
}
