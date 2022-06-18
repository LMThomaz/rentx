import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';
import { useNavigate } from '../../hooks/navigate';
import { Container } from './styles';

export function Splash() {
  const navigation = useNavigate();
  const splashAnimation = useSharedValue(0);
  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });
  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });
  function startApp() {
    navigation.navigate('SignIn');
  }
  useEffect(() => {
    splashAnimation.value = withTiming(
      50,
      {
        duration: 1600,
      },
      () => {
        'worklet';
        runOnJS(startApp)();
      },
    );
  }, []);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg width={80} height={80} />
      </Animated.View>
      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
}
