import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Confirmation } from '../screens/Confirmation';
import { SignIn } from '../screens/SignIn';
import { FirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep } from '../screens/SignUp/SecondStep';
import { Splash } from '../screens/Splash';

export type AuthRoutesName = {
  Splash: {};
  SignIn: {};
  FirstStep: {};
  SecondStep: {};
  Confirmation: {};
};

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesName>();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name='Splash' component={Splash} />
      <Screen name='SignIn' component={SignIn} />
      <Screen name='FirstStep' component={FirstStep} />
      <Screen name='SecondStep' component={SecondStep} />
      <Screen name='Confirmation' component={Confirmation} />
    </Navigator>
  );
}
