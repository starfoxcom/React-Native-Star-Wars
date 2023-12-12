import {View, StyleSheet} from 'react-native';

export interface GridViewProps<T> {
  data: T[];
  renderItem(item:T): JSX.Element;
}

const GridView = <T extends any>(props: GridViewProps<T>) => {
  const {data, renderItem} = props;
  return <View style={styles.container}>
    {data.map((item, index) => {
      return <View key={index} style={styles.item}>
        {renderItem(item)}
      </View>;
    })}
  </View>
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
item: {
  backgroundColor: 'white',
  width: '31.3%',
  margin: '1%',
  height: 145,
  borderWidth: 1,
  borderRadius: 10,
  alignItems: 'center',
  shadowColor: 'black',
  elevation: 5,
}

});

export default GridView;