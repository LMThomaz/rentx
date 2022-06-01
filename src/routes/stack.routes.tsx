import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarDetails } from '../screens/CarDetails';
import { Home } from '../screens/Home';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { SchedulingDetails } from '../screens/SchedulingDetails';

export type StackRoutesName = {
  Home: {};
  CarDetails: {};
  Scheduling: {};
  SchedulingComplete: {};
  SchedulingDetails: {};
};

const { Navigator, Screen } = createNativeStackNavigator<StackRoutesName>();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name='Home' component={Home} />
      <Screen name='CarDetails' component={CarDetails} />
      <Screen name='Scheduling' component={Scheduling} />
      <Screen name='SchedulingComplete' component={SchedulingComplete} />
      <Screen name='SchedulingDetails' component={SchedulingDetails} />
    </Navigator>
  );
}
