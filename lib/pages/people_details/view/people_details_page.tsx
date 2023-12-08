import { Image, StyleSheet, Text, View } from "react-native";
import { PeopleStackScreenProps } from "../../../router/router";


function PeopleDetailsPage({route} : PeopleStackScreenProps<'PeopleDetailsPage'>) {
  const {name, uri} = route.params;
  return (
    <View style={{justifyContent:'center', alignItems:'center'}} >
      <Text style={styles.text}>{name}</Text>
      <Image source={{uri: uri}} style={{width: 200, height: 300}} />
      
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }

});

export default PeopleDetailsPage;