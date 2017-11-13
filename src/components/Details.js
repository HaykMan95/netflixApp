import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  Share
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
const {width, height} = Dimensions.get('window');
import TabsEpisodes from './TabsEpisodes';
import TextGradient from 'react-native-linear-gradient';

export default class Details extends Component{

  onShare() {
    Share.share({
      title: 'test',
      url: 'www.youtube.com',
      message: 'msg test'
    }, {
      //Andorid
      dialogTitle: 'Share this',
      //ios
      excludeActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }

  render() {
    const item = this.props.navigation.state.params.item;
    const {thumbnail, cast, description, year, creator, numOfEpisodes, season} = item.details;
    const {episodes} = item.details;
    const {name} = this.props.navigation.state.params.item;
    return(
      <ScrollView style={styles.container}>
        <Image
          style={styles.thumbnail}
          source={{uri: thumbnail}}
        >
          <View style={styles.buttonPlay}>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('VideoPlayerView')}
            >
              <View>
                <Icon
                  style={styles.iconPlay}
                  name="play-circle"
                  size={100}
                  color="white"
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.nameContainer}>
            <TextGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
              <Text style={[styles.text, styles.titleShow]}>{name}</Text>
            </TextGradient>

          </View>
        </Image>
        <View style={styles.descriptionContainer}>
          <View style={styles.subtitle}>
            <Text style={[styles.descriptionText, styles.subTitleText]}>{year}</Text>
            <Text style={[styles.descriptionText, styles.subTitleText]}>{numOfEpisodes}</Text>
            <Text style={[styles.descriptionText, styles.subTitleText]}>{season} Season</Text>
          </View>
          <View style={styles.description}>
            <Text style={[styles.descriptionText, styles.light]}>{description}</Text>
          </View>
          <Text style={[styles.descriptionText]}>
            Cast: {cast}
          </Text>
          <Text style={[styles.descriptionText]}>
            Creator: {creator}
          </Text>
          <View style={styles.shareListIcons}>
            <View style={styles.myListIcon}>
              <IonIcons
                style={styles.listIcon}
                name="md-checkmark"
                color="grey"
                size={25}
              />
              <Text style={styles.descriptionText}>My List</Text>
            </View>
            <TouchableHighlight onPress={this.onShare}>
              <View style={styles.myShareIcon}>
                <Icon
                  style={styles.shareIcon}
                  name="share-alt"
                  color="grey"
                  size={25}
                />
                <Text style={styles.descriptionText}>Share</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <TabsEpisodes data={episodes} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  nameContainer: {
    backgroundColor: 'transparent'
  },
  titleShow: {
    fontSize: 35,
    paddingLeft: 10,
    marginBottom: 10,
    color: 'white'
  },
  thumbnail: {
    width: width,
    height: 300
  },
  container: {
    flex: 1,
    backgroundColor: '#181818'
  },
  buttonPlay: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  iconPlay: {
    opacity: 0.7,
    backgroundColor: 'transparent'
  },
  descriptionContainer: {
    paddingHorizontal: 20
  },
  subtitle: {
    flexDirection: 'row'
  },
  subTitleText: {
    marginRight: 20
  },
  descriptionText: {
    color: '#b3b3b3',
    fontSize: 16
  },
  shareListIcons: {
    flexDirection: 'row',
    marginVertical: 30
  },
  listIcon: {
    height: 25
  },
  shareIcon: {
    height: 25
  },
  myListIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40
  },
  myShareIcon:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  description: {
    marginVertical: 10
  },
  light: {
    fontWeight: '200'
  }
});
