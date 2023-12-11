import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { PeopleStackScreenProps } from "../../../router/router";


function PeopleDetailsPage({ route }: PeopleStackScreenProps<'PeopleDetailsPage'>) {
  const { person, uri } = route.params;
  return (
    <ScrollView>

      <View style={{ justifyContent: 'center', alignItems: 'center' }} >
        <Text style={styles.title}>{person.name}</Text>
        <View style={styles.shadow}>
          <ImageBackground source={
            { uri: `https://starwars-visualguide.com/assets/img/big-placeholder.jpg` }} imageStyle={styles.imageBackground} >
            <Image source={{ uri: uri }} style={styles.image} />
          </ImageBackground>
        </View>
        <Text style={styles.text}>Birth Year: {person.birth_year}</Text>
        <Text style={styles.text}>Height: {person.height} cm</Text>
        <Text style={styles.text}>Mass: {person.mass} kg</Text>
        <Text style={styles.text}>Gender: {person.gender}</Text>
        <Text style={styles.text}>Hair Color: {person.hair_color}</Text>
        <Text style={styles.text}>Skin Color: {person.skin_color}</Text>


      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },

  text: {

    fontSize: 20,
    color: 'black',
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
  },

  imageBackground: {
    width: 200,
    height: 300,
    borderRadius: 100,
  },
  shadow: {
    width: 200,
    height: 300,
    marginBottom: 15,
    borderRadius: 100,
    shadowColor: 'black',
    elevation: 5,
  }

});

export default PeopleDetailsPage;