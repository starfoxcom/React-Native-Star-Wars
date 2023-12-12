import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { PeoplePage } from '../../pages/people/people';
import { PeopleDetailsPage } from '../../pages/people_details/people_details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PeopleStackParamList, PlanetsStackParamList, RootTabParamList, SpaceshipsStackParamList } from '../../router/router';
import { SpaceshipsPage } from '../../pages/spaceships/spaceships';
import { SpaceshipDetailsPage } from '../../pages/spaceship_details/spaceship_details';
import { PlanetsPage } from '../../pages/planets/planets';
import { PlanetDetailsPage } from '../../pages/planet_details/planet_details';

const Tab = createMaterialBottomTabNavigator<RootTabParamList>();

const PeopleStackNavigator = createNativeStackNavigator<PeopleStackParamList>();

const SpaceshipStackNavigator = createNativeStackNavigator<SpaceshipsStackParamList>();

const PlanetsStackNavigator = createNativeStackNavigator<PlanetsStackParamList>();

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

const PlanetsNavigatorScreen = () => (
  <PlanetsStackNavigator.Navigator>
    <PlanetsStackNavigator.Screen options={{title: 'Planets', headerShown: false}} name="PlanetsPage" component={PlanetsPage} />
    <PlanetsStackNavigator.Screen options={{title: 'Planet Details'}} name="PlanetDetailsPage" component={PlanetDetailsPage} initialParams={{planet: undefined, uri: ''}} />
  </PlanetsStackNavigator.Navigator>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="People" component={PeopleNavigatorScreen} />
      <Tab.Screen name="Spaceships" component={SpaceshipNavigatorScreen} />
      <Tab.Screen name="Planets" component={PlanetsNavigatorScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;