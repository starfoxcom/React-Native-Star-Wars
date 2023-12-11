import { CompositeScreenProps,NavigatorScreenParams } from "@react-navigation/native";
import type { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import { StackScreenProps } from "@react-navigation/stack";
import { PeopleResult, SpaceshipsResult } from "../models/models";

// Here we define the params for each tab screen
export type RootTabParamList = {
  Home: undefined;
  People: NavigatorScreenParams<PeopleStackParamList>;
  Spaceships: NavigatorScreenParams<SpaceshipStackParamList>;
};

// Here we define the params for each screen in the People tab
export type PeopleStackParamList = {
  PeoplePage: undefined;
  PeopleDetailsPage: { person: PeopleResult; uri: string };
};

// Here we define the params for each screen in the Spaceships tab
export type SpaceshipStackParamList = {
  SpaceshipPage: undefined;
  SpaceshipDetailsPage: { spaceship: SpaceshipsResult; uri: string };
};

// Here we define the props for each screen in the People tab
export type PeopleStackScreenProps<T extends keyof PeopleStackParamList> =
StackScreenProps<PeopleStackParamList, T>;

// Here we define the props for each screen in the Spaceships tab
export type SpaceshipStackScreenProps<T extends keyof SpaceshipStackParamList> =
StackScreenProps<SpaceshipStackParamList, T>;

// Here we declare the global namespace for react navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}