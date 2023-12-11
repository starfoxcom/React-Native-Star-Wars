import { Text, Image, View, TouchableOpacity } from "react-native";
import { GridView } from "../components/components";
import { PeopleStackScreenProps } from "../../../router/router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPeople } from "../../../API/starwars_API";
import { People, PeopleResult } from "../../../models/models";
import { LoadingSpinner, getUrlId } from "../../../utils/utils";


function PeoplePage({ navigation }: PeopleStackScreenProps<'PeoplePage'>) {

  const [page, setPage] = useState(1);

  const { isPending, isError, data, error } = useQuery<People>({
    queryKey: ['people', page],
    queryFn: () => fetchPeople(page),
  });

  const people: PeopleResult[] = data?.results || [];

  if (isPending) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <LoadingSpinner />
    </View>
  );

  if (isError) return <View><Text>Error: {error.message}</Text></View>;

  return (
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
      <GridView data={people} renderItem={(item) => (
        <TouchableOpacity
          style={{ justifyContent: 'center', alignItems: 'center' }}
          onPress={() => navigation.navigate('PeopleDetailsPage', {
            person: item, uri: `https://starwars-visualguide.com/assets/img/characters/${getUrlId(item.url)}.jpg`
          })}
        >
          <Image source={{
            uri: `https://starwars-visualguide.com/assets/img/characters/${getUrlId(item.url)}.jpg`
          }} style={{ width: 114, height: 110, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )} />
    </View>
  )
}

export default PeoplePage;