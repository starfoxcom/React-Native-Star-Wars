import { Text, Image, View } from "react-native";
import { GridView } from "../components/components";

// This will be removed when fetching data from the SWAPI
const mockData = [
  {
    id: 1,
    name: 'Nguyen Van A',
    age: 20,
    address: 'Ha Noi',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    name: 'Nguyen Van B',
    age: 20,
    address: 'Ha Noi',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    name: 'Nguyen Van C',
    age: 20,
    address: 'Ha Noi',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    name: 'Nguyen Van D',
    age: 20,
    address: 'Ha Noi',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    name: 'Nguyen Van E',
    age: 20,
    address: 'Ha Noi',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    name: 'Nguyen Van F',
    age: 20,
    address: 'Ha Noi',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 7,
    name: 'Nguyen Van G',
    age: 20,
    address: 'Ha Noi',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 8,
    name: 'Nguyen Van H',
    age: 20,
    address: 'Ha Noi',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 9,
    name: 'Nguyen Van I',
    age: 20,
    address: 'Ha Noi',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 10,
    name: 'Nguyen Van K',
    age: 20,
    address: 'Ha Noi',
    avatar: 'https://picsum.photos/200/300',
  
  }
]

function PeoplePage() {
  return (
    <View style={{ flex: 1, flexDirection:'row', flexWrap:'wrap' }}>
      <GridView data={mockData} renderItem={(item) => (
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image source={{ uri: item.avatar }} style={{ width: 114, height: 115, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
        <Text>{item.name}</Text>
      </View>
      )} />
    </View>
  )
}

export default PeoplePage;