import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Home } from '../../pages/home/home';
import { People } from '../../pages/people/people';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="People" component={People} />
    </Tab.Navigator>
  );
}

export default TabNavigator;