import { Container } from './styles';
import LottieView from 'lottie-react-native';
import loadingCar from '../../assets/load_car.json';

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        resizeMode='contain'
        style={{ height: 200 }}
        source={loadingCar}
        autoPlay
        loop
      />
    </Container>
  );
}
