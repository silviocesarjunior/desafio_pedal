import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import MenuItem from './src/MenuItem';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Pedalada</Text>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Você está aqui"
        />
      </MapView>
      <View style={styles.menucontainer}> 
        <MenuItem itemImage={require('./img/Vector-1.png')} />
        <MenuItem itemImage={require('./img/Vector-2.png')} />
        <MenuItem itemImage={require('./img/Vector-3.png')} />
        <MenuItem itemImage={require('./img/Vector-4.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: '70%',
  },
  menucontainer :{
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    
  }
});
