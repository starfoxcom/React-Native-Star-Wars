import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomePage } from '../../pages/home/home';
import { PeoplePage } from '../../pages/people/people';
import { PeopleDetailsPage } from '../../pages/people_details/people_details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PeopleStackParamList, RootTabParamList, SpaceshipsStackParamList } from '../../router/router';
import { SpaceshipsPage } from '../../pages/spaceships/spaceships';
import { SpaceshipDetailsPage } from '../../pages/spaceship_details/spaceship_details';

const Tab = createMaterialBottomTabNavigator<RootTabParamList>();

const PeopleStackNavigator = createNativeStackNavigator<PeopleStackParamList>();

const SpaceshipStackNavigator = createNativeStackNavigator<SpaceshipsStackParamList>();

const PeopleNavigatorScreen = () => (
  <PeopleStackNavigator.Navigator>
    <PeopleStackNavigator.Screen options={{title: 'People', headerShown: false}} name="PeoplePage" component={PeoplePage} />
    <PeopleStackNavigator.Screen options={{title: 'Person Details'}} name="PeopleDetailsPage" component={PeopleDetailsPage} initialParams={{person: undefined, uri: ''}} />
  </PeopleStackNavigator.Navigator>
);

const SpaceshipNavigatorScreen = () => (
  <SpaceshipStackNavigator.Navigator>
    <SpaceshipStackNavigator.Screen options={{title: 'Spaceships', headerShown: false}} name="SpaceshipsPage" component={SpaceshipsPage} />
    <SpaceshipStackNavigator.Screen options={{title: 'Spaceship Details'}} name="SpaceshipDetailsPage" component={SpaceshipDetailsPage} initialParams={{spaceship: undefined, uri: ''}} />
  </SpaceshipStackNavigator.Navigator>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="People" component={PeopleNavigatorScreen} />
      <Tab.Screen name="Spaceships" component={SpaceshipNavigatorScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;