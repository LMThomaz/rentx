import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';
import { CarTDO } from '../../dtos/CarTDO';
import { useNavigate } from '../../hooks/useNavigate';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
} from './styles';

interface Params {
  car: CarTDO;
}

export function CarDetails() {
  const navigation = useNavigate();
  const route = useRoute();
  const { car } = route.params as Params;
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y;
  });
  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP,
      ),
    };
  });
  function handleConfirmRental() {
    navigation.navigate('Scheduling', { car });
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
      <Animated.View style={[headerStyleAnimation]}>
        <Header>
          <BackButton onPress={handleBack} />
        </Header>
        <CarImages>
          <ImageSlider imagesUrl={car.photos} />
        </CarImages>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight(),
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}>
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
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>
        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>
      <Footer>
        <Button
          title='Escolher período do aluguel'
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
