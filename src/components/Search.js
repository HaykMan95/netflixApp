import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TextInput,
    FlatList,
    Navigator
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
const {width, height} = Dimensions.get('window');
const show_first = [
  {
    key: 1,
    name: 'Suits',
    image: 'http://is1.mzstatic.com/image/thumb/Music111/v4/74/6c/0d/746c0da7-144e-748a-8e18-547183e5f3a0/source/1200x630bb.jpg'
  },
  {
    key: 2,
    name: 'Walking Dead',
    image: 'https://vignette.wikia.nocookie.net/walkingdead/images/5/59/Czch_uoWEAAa-KA.jpg/revision/latest/scale-to-width-down/670?cb=20161212053329'
  },
  {
    key: 3,
    name: 'Sherlock',
    image: 'https://resizing.flixster.com/C4csl9fTKgkNs0um1DaX6fGatcs=/206x305/v1.dDsyMDc1MDE7ajsxNzUwNzsxMjAwOzEzNjQ7MjA0Ng'
  },
  {
    key: 4,
    name: 'True Detective',
    image: 'http://s3.amazonaws.com/digitaltrends-uploads-prod/2017/09/True-Detective-season-1-logo.jpg'
  },
  {
    key: 5,
    name: 'Breaking Bad',
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDNhNzhkNDctOTlmOS00NWNmLWEyODQtNWMxM2UzYmJiNGMyXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UY1200_CR113,0,630,1200_AL_.jpg'
  },
  {
    key: 6,
    name: 'Supernatural',
    image: 'https://www.justwatch.com/images/poster/498684/s592'
  },
  {
    key: 7,
    name: 'StartUp',
    image: 'https://st.kp.yandex.net/images/film_big/972878.jpg'
  },
  {
    key: 8,
    name: 'Damnation',
    image: 'https://st.kp.yandex.net/images/film_big/1007813.jpg'
  }

]

class Search extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: ''
    }
  }
  filter(text) {
    const newData = show_first.filter(function(item) {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) !== -1;
    });
    this.setState({
      data: newData,
      text: text
    })
  }
  deleteData() {
    this.setState({text: '', data: ''});
  }
  _renderItem(item) {
    return(
      <Image key={item.id} style={styles.image} source={{uri: item.image}} />
    )
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="search"
            color="grey"
            size={18}
            style={styles.searchIcon}
          />
          <TextInput
            value={this.state.text}
            onChangeText={(text) => this.filter(text)}
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="grey"
            keyboardAppearance="dark"
            autoFocus={true}
          />
          {this.state.text ?
          <TouchableWithoutFeedback onPress={() => this.deleteData()}>
            <Icon
              name="times-circle"
              color="grey"
              size={18}
              style={styles.iconInputColor}
            />
          </TouchableWithoutFeedback>
          : null}
          <TouchableWithoutFeedback style={styles.cancelButton} onPress={() => this.props.navigation.navigate('Index')}>
            <View style={styles.containerButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          <FlatList
            style={{marginHorizontal: 5}}
            data={this.state.data}
            horizontal
            renderItem={({item}) => this._renderItem(item)}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    header: {
        height: 40,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        paddingBottom: 5,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    searchIcon: {
        position: 'absolute',
        top: 5,
        left: 15,
        zIndex: 1,
        backgroundColor:'transparent'
    },
    iconInputClose: {
        position: 'absolute',
        top: 5,
        right: 90,
        backgroundColor: 'transparent',
        zIndex: 1
    },
    input: {
        width: width - (width / 4),
        height: 30,
        backgroundColor: '#323232',
        marginHorizontal: 10,
        paddingLeft: 30,
        borderRadius: 3,
        color: 'grey'
    },
    cancelButtonText: {
        color: 'white'
    },
    image: {
        marginRight: 5,
        width: 115,
        height: 170
    }
})


export default Search;
