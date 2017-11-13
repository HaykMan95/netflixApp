import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

import VideoPlayer from 'react-native-video-controls';

export default class VideoPlayerView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VideoPlayer
          source={require('../video/video.mp4')}
          title="ww"
          onBack={() => null}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
