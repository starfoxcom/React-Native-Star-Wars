import { PeopleStackScreenProps } from "../../router/router";
import View from "./view/view";



export function PeopleDetails({navigation, route}: PeopleStackScreenProps<'PeopleDetailsPage'>) {
  return (
    <View navigation={navigation} route={route} />
  )
}