import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';
import { AppStackRoutes } from './app.stack.routes';

export type AppTabRoutesName = {
  Home: {};
  Profile: {};
  MyCars: {};
};

const { Navigator, Screen } = createBottomTabNavigator<AppTabRoutesName>();

export function AppTabRoutes() {
  return (
    <Navigator>
      <Screen name='Home' component={AppStackRoutes} />
      <Screen name='Profile' component={Home} />
      <Screen name='MyCars' component={MyCars} />
    </Navigator>
  );
}
