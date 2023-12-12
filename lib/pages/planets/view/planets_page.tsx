import { Text, Image, View, TouchableOpacity, ImageBackground, Button } from "react-native";
import { PlanetStackScreenProps } from "../../../router/router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPeople, fetchPlanets } from "../../../API/starwars_API";
import { Planets, PlanetsResult } from "../../../models/models";
import { GridView, LoadingSpinner, getUrlId } from "../../../utils/utils";


function PlanetsPage({ navigation }: PlanetStackScreenProps<'PlanetsPage'>) {

  const [page, setPage] = useState(1);

  const { isPending, isError, data, error } = useQuery<Planets>({
    queryKey: ['planets', page],
    queryFn: () => fetchPlanets(page),
  });

  const people: PlanetsResult[] = data?.results || [];

  if (isPending) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <LoadingSpinner />
    </View>
  );

  if (isError) return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
    <Text>Error: {error.message}</Text>
  </View>;

  return (
    <View style={{justifyContent:"space-between", flex:1}}>
      <View>
        <GridView data={people} renderItem={(item) => (
          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => navigation.navigate('PlanetDetailsPage', {
              planet: item, uri: `https://starwars-visualguide.com/assets/img/planets/${getUrlId(item.url)}.jpg`
            })}
          >
            <ImageBackground source={
              { uri: `https://starwars-visualguide.com/assets/img/big-placeholder.jpg` }}
              imageStyle={{
                width: 114, height: 110, borderTopLeftRadius: 10, borderTopRightRadius: 10,
              }} >
              <Image source={{
                uri: `https://starwars-visualguide.com/assets/img/planets/${getUrlId(item.url)}.jpg`
              }} style={{ width: 114, height: 110, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            </ImageBackground>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )} />
      </View>
      <View style={{ justifyContent: "space-evenly", flexDirection: 'row', bottom:10}}>
        <Button
          title="Previous"
          disabled={!data?.previous}
          onPress={() => {
            setPage(page - 1)
          }}
        />
        <Button
          title="Next"
          disabled={!data?.next}
          onPress={() => {
            setPage(page + 1)
          }}
        />
      </View>
    </View>
  )
}

export default PlanetsPage;