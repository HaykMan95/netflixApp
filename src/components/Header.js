import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => props.toggle()}>
      <Icon
        name="bars"
        color="white"
        size={25}
      />
    </TouchableWithoutFeedback>
    <Text style={styles.logo}> New App </Text>
    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Search')}>
      <Icon
        name="search"
        color="white"
        size={25}
      />
    </TouchableWithoutFeedback>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'space-between'
  },
  logo: {
    color: 'red'
  }
});

export default Header;
