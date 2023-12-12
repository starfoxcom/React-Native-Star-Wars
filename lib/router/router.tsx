import { NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { PeopleResult, PlanetsResult, SpaceshipsResult } from "../models/models";

// Here we define the params for each tab screen
export type RootTabParamList = {
  People: NavigatorScreenParams<PeopleStackParamList>;
  Spaceships: NavigatorScreenParams<SpaceshipsStackParamList>;
  Planets: NavigatorScreenParams<PlanetsStackParamList>;
};

// Here we define the params for each screen in the People tab
export type PeopleStackParamList = {
  PeoplePage: undefined;
  PeopleDetailsPage: { person: PeopleResult; uri: string };
};

// Here we define the params for each screen in the Spaceships tab
export type SpaceshipsStackParamList = {
  SpaceshipsPage: undefined;
  SpaceshipDetailsPage: { spaceship: SpaceshipsResult; uri: string };
};

// Here we define the params for each screen in the Planets tab
export type PlanetsStackParamList = {
  PlanetsPage: undefined;
  PlanetDetailsPage: { planet: PlanetsResult; uri: string };
};

// Here we define the props for each screen in the People tab
export type PeopleStackScreenProps<T extends keyof PeopleStackParamList> =
StackScreenProps<PeopleStackParamList, T>;

// Here we define the props for each screen in the Spaceships tab
export type SpaceshipStackScreenProps<T extends keyof SpaceshipsStackParamList> =
StackScreenProps<SpaceshipsStackParamList, T>;

// Here we define the props for each screen in the Planets tab
export type PlanetStackScreenProps<T extends keyof PlanetsStackParamList> =
StackScreenProps<PlanetsStackParamList, T>;

// Here we declare the global namespace for react navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}