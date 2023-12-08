import { PeopleStackScreenProps } from "../../router/router";
import View from "./view/view";

export function People({navigation, route}: PeopleStackScreenProps<'PeoplePage'>) {
  return (
    <View navigation={navigation} route={route} />
  )
}