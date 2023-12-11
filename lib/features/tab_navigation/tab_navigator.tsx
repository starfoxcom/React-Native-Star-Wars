import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../pages/home/home';
import { People } from '../../pages/people/people';
import { PeopleDetails } from '../../pages/people_details/people_details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Router } from '@react-navigation/native';
import { PeopleStackParamList, RootTabParamList } from '../../router/router';

const Tab = createMaterialBottomTabNavigator<RootTabParamList>();

const PeopleStackNavigator = createNativeStackNavigator<PeopleStackParamList>();

const PeopleNavigatorScreen = () => (
  <PeopleStackNavigator.Navigator>
    <PeopleStackNavigator.Screen options={{title: 'People', headerShown: false}} name="PeoplePage" component={People} />
    <PeopleStackNavigator.Screen options={{title: 'Person Details'}} name="PeopleDetailsPage" component={PeopleDetails} initialParams={{person: undefined, uri: ''}} />
  </PeopleStackNavigator.Navigator>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="People" component={PeopleNavigatorScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;