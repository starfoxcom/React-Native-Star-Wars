import { Text, Image, View, TouchableOpacity, ImageBackground } from "react-native";
import { SpaceshipStackScreenProps } from "../../../router/router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSpaceships } from "../../../API/starwars_API";
import { Spaceships, SpaceshipsResult } from "../../../models/models";
import { GridView, LoadingSpinner, getUrlId } from "../../../utils/utils";


function SpaceshipsPage({ navigation }: SpaceshipStackScreenProps<'SpaceshipsPage'>) {

  const [page, setPage] = useState(1);

  const { isPending, isError, data, error } = useQuery<Spaceships>({
    queryKey: ['spaceships', page],
    queryFn: () => fetchSpaceships(page),
  });

  const spaceships: SpaceshipsResult[] = data?.results || [];

  if (isPending) return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <LoadingSpinner />
    </View>
  );

  if (isError) return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
    <Text>Error: {error.message}</Text>
  </View>;

  return (
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
      <GridView data={spaceships} renderItem={(item) => (
        <TouchableOpacity
          style={{ justifyContent: 'center', alignItems: 'center' }}
          onPress={() => navigation.navigate('SpaceshipDetailsPage', {
            spaceship: item, uri: `https://starwars-visualguide.com/assets/img/starships/${getUrlId(item.url)}.jpg`
          })}
        >
          <ImageBackground source={
            { uri: `https://starwars-visualguide.com/assets/img/big-placeholder.jpg` }}
            imageStyle={{
              width: 114, height: 110, borderTopLeftRadius: 10, borderTopRightRadius: 10,
            }} >
            <Image source={[{
              uri: `https://starwars-visualguide.com/assets/img/starships/${getUrlId(item.url)}.jpg`
            }]} style={{
              width: 114, height: 110, borderTopLeftRadius: 10, borderTopRightRadius: 10,
            }} />
          </ImageBackground>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )} />
    </View>
  )
}

export default SpaceshipsPage;