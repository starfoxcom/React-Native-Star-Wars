import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { PlanetStackScreenProps } from "../../../router/router";


function PlanetDetailsPage({ route }: PlanetStackScreenProps<'PlanetDetailsPage'>) {
  const { planet, uri } = route.params;
  return (
    <ScrollView>
      <View style={{ justifyContent: 'center', alignItems: 'center' }} >
        <Text style={styles.title}>{planet.name}</Text>
        <View style={styles.shadow}>
          <ImageBackground source={
            { uri: `https://starwars-visualguide.com/assets/img/big-placeholder.jpg` }} imageStyle={styles.imageBackground} >
            <Image source={{ uri: uri }} style={styles.image} />
          </ImageBackground>
        </View>
        <Text style={styles.text}>Population: {planet.population}</Text>
        <Text style={styles.text}>Rotation Period: {planet.rotation_period} days</Text>
        <Text style={styles.text}>Orbital Period: {planet.orbital_period} days</Text>
        <Text style={styles.text}>Diameter: {planet.diameter}km</Text>
        <Text style={styles.text}>Gravity: {planet.gravity}</Text>
        <Text style={styles.text}>Terrain: {planet.terrain}</Text>
        <Text style={styles.text}>Surface Water: {planet.surface_water}%</Text>
        <Text style={styles.text}>Climate: {planet.climate}</Text>
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
    width: 300,
    height: 300,
    marginBottom: 10,
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: 'black',
  },

  imageBackground: {
    width: 300,
    height: 300,
    borderRadius: 1000,
  },
  shadow: {
    width: 300,
    height: 300,
    marginBottom: 15,
    borderRadius: 1000,
    shadowColor: 'black',
    elevation: 5,
  }

});

export default PlanetDetailsPage;