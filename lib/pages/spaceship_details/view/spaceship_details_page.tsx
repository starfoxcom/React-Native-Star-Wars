import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { SpaceshipStackScreenProps } from "../../../router/router";


function SpaceshipDetailsPage({ route }: SpaceshipStackScreenProps<'SpaceshipDetailsPage'>) {
  const { spaceship, uri } = route.params;
  return (
    <ScrollView>
      <View style={{ justifyContent: 'center', alignItems: 'center' }} >
        <Text style={styles.title}>{spaceship.name}</Text>
        <View style={styles.shadow}>
          <ImageBackground source={
            { uri: `https://starwars-visualguide.com/assets/img/big-placeholder.jpg` }} imageStyle={styles.imageBackground} >
            <Image source={{ uri: uri }} style={styles.image} />
          </ImageBackground>
        </View>
        <Text style={styles.text}>Model: {spaceship.model}</Text>
        <Text style={styles.text}>Manufacturer: {spaceship.manufacturer}</Text>
        <Text style={styles.text}>Class: {spaceship.starship_class}</Text>
        <Text style={styles.text}>Cost: {spaceship.cost_in_credits} credits</Text>
        <Text style={styles.text}>Speed: {spaceship.max_atmosphering_speed}km/h</Text>
        <Text style={styles.text}>Hyperdrive Rating: {spaceship.hyperdrive_rating}</Text>
        <Text style={styles.text}>MGLT: {spaceship.MGLT}</Text>
        <Text style={styles.text}>Length: {spaceship.length}</Text>
        <Text style={styles.text}>Cargo Capacity: {spaceship.cargo_capacity}</Text>
        <Text style={styles.text}>Minimum Crew: {spaceship.crew}</Text>
        <Text style={styles.text}>Passengers: {spaceship.passengers}</Text>
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

export default SpaceshipDetailsPage;