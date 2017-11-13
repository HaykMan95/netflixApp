import React, {Component} from 'react';
import {
  StackNavigator
} from 'react-navigation';

import IndexApp from './IndexApp';
import Search from './src/components/Search';
import Details from './src/components/Details';
import VideoPlayerView from './src/components/VideoPlayerView';
import { NavigationActions } from 'react-navigation'
import Map from './src/components/Map';

const Navigation = StackNavigator({
  Index: {screen: IndexApp},
  Search: {screen: Search},
  Details: {screen: Details},
  VideoPlayerView: {screen: VideoPlayerView},
  Map: {screen: Map}
});

export default Navigation
