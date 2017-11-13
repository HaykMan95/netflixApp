import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import SideMenu from 'react-native-side-menu';

import List from './src/components/List';
import Slide from './src/components/Slider';
import Header from './src/components/Header';
import Menu from './src/components/Menu';

export default class IndexApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  updateMenu(isOpen){
    this.setState({isOpen});
  }

  render() {
    return (
      <View style={styles.container}>
        <SideMenu
          menu={<Menu navigation={this.props.navigation} />}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenu(isOpen)}
        >
          <View style={styles.container}>
            <Header toggle={this.toggle.bind(this)} navigation={this.props.navigation} />
            <Slide />
            <List navigation={this.props.navigation} />
          </View>
        </SideMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
