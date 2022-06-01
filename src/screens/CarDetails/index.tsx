import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Header,
  Name,
  Period,
  Price,
  Rent,
  Footer,
} from './styles';
import speedSvg from '../../assets/speed.svg';
import forceSvg from '../../assets/force.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackRoutesName } from '../../routes/stack.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { CarTDO } from '../../dtos/CarTDO';

interface Params {
  car: CarTDO;
}

export function CarDetails() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackRoutesName>>();
  const route = useRoute();
  const { car } = route.params as Params;
  function handleConfirmRental() {
    navigation.navigate('Scheduling');
  }
  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        translucent
        backgroundColor='transparent'
      />
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={speedSvg}
            />
          ))}
        </Accessories>
        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button
          title='Escolher período do aluguel'
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
