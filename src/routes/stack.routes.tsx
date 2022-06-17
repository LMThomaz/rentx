import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarDetails } from '../screens/CarDetails';
import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';
import { Scheduling } from '../screens/Scheduling';
import { Confirmation } from '../screens/Confirmation';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { FirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep } from '../screens/SignUp/SecondStep';

export type StackRoutesName = {
  CarDetails: {};
  Home: {};
  MyCars: {};
  Scheduling: {};
  Confirmation: {};
  SchedulingDetails: {};
  Splash: {};
  SignIn: {};
  FirstStep: {};
  SecondStep: {};
};

const { Navigator, Screen } = createNativeStackNavigator<StackRoutesName>();

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName='SignIn'
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name='SignIn' component={SignIn} />
      <Screen name='FirstStep' component={FirstStep} />
      <Screen name='SecondStep' component={SecondStep} />
      <Screen
        name='Home'
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen name='MyCars' component={MyCars} />
      <Screen name='CarDetails' component={CarDetails} />
      <Screen name='Scheduling' component={Scheduling} />
      <Screen name='Confirmation' component={Confirmation} />
      <Screen name='SchedulingDetails' component={SchedulingDetails} />
    </Navigator>
  );
}
