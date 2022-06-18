import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarDetails } from '../screens/CarDetails';
import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';
import { Scheduling } from '../screens/Scheduling';
import { Confirmation } from '../screens/Confirmation';
import { SchedulingDetails } from '../screens/SchedulingDetails';

export type AppStackRoutesName = {
  CarDetails: {};
  Home: {};
  MyCars: {};
  Scheduling: {};
  Confirmation: {};
  SchedulingDetails: {};
};

const { Navigator, Screen } = createNativeStackNavigator<AppStackRoutesName>();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}>
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
