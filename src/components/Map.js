import React from 'react';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  StyleSheet,
   Text,
   View,
   Button,
   Image
  } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Map extends React.Component {
  constructor(props) {
     super(props);
     this.state = {};
   }

  success = (pos) => {
    var crd = pos.coords;
    this.setState({
      latitude: crd.latitude,
      longitude: crd.longitude,
      initialRegion: {
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    })
    console.log('Your current position is:');
  };

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  findMe() {
      navigator.geolocation.getCurrentPosition(this.success, this.error, this.state.options);
  }

  render() {
    var view;
    if(this.state.initialRegion) {
      view =
      <MapView
        style={styles.map}
        initialRegion={this.state.initialRegion}>
        <MapView.Marker
          coordinate={
            {
              latitude: this.state.initialRegion.latitude,
              longitude: this.state.initialRegion.longitude,
            }
          }
        />
      </MapView>
    } else {
      this.findMe();
      view = <Text> Loading... </Text>
    }
    return (
      <View style={styles.container}>
       {view}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: 0,
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
  drawerBtn: {
    position: 'absolute',
    left: 0,
    top: 0,
  }
});
