import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { Settings } from '../screens/Settings';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false  // Oculta la hamburguesa
   }}
    >
      <Drawer.Screen name="Menu" component={Tabs} />
      <Drawer.Screen name="Settings" component={StackNavigator} />
    </Drawer.Navigator>
  );
}
