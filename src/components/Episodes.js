import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
export default class Episodes extends Component {

  renderEpisodes() {
    const res = this.props.episodes.map((item, i) => {
      const img = item.image == null ? 'https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png' : item.image.medium;
      return (
        <View style={styles.video} key={i}>
          <View style={styles.VideoEpisode}>
            <Image style={styles.image} source={{uri: img}}>
              <View style={styles.buttonPlay}>
                <TouchableWithoutFeedback onPress={null}>
                  <View style={{backgroundColor: 'transparent'}}>
                    <Icon
                      style={styles.iconPlay}
                      name="play-circle"
                      size={30}
                      color="white"
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </Image>
            <View style={styles.epispmdeName}>
              <Text style={styles.epispmdeText}>{item.number}. {item.name}</Text>
              <Text style={styles.epispmdeText}>{item.runtime}</Text>
            </View>
          </View>
          <Text style={styles.summary}>
            {item.summary}
          </Text>
        </View>
      )
    });

    return res;
  }

  render() {
    return(
      <View style={styles.container}>
        {this.renderEpisodes()}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  image: {
    width: 150,
    height: 80,
    marginRight: 10
  },
  buttonPlay: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  epispmdeName: {
    justifyContent: 'center',
  },
  VideoEpisode: {
    flexDirection: 'row'
  },
  epispmdeText: {
    color: 'white'
  },
  summary: {
    color: 'grey',
    marginVertical: 10
  }
});
