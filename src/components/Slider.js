import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')

const Slider = props => (
    <View style={styles.slide}>
      <Image resizeMode='stretch' style={styles.image} source={{uri: props.url}} />
    </View>
)

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black'
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    height: 300,
    resizeMode: 'contain',
    flex: 1
  }
}

export default class extends Component {
    constructor(props){
        super(props)

        this.state = {
            imagesSlider: [
                'http://cdn.pcwallart.com/images/thor-the-dark-world-cover-wallpaper-3.jpg',
                'https://st.kp.yandex.net/im/wallpaper/2/3/0/kinopoisk.ru-True-Detective-2300505--w--1280.jpg',
                'https://www.hdwallpapers.in/walls/murder_on_the_orient_express_2017_4k-wide.jpg',
                'https://st.kp.yandex.net/im/wallpaper/2/2/5/kinopoisk.ru-The-Walking-Dead-2253097--w--1280.jpg'
            ]
        }
    }
    render(){
        return (
            <View style={styles.container}>
            <Swiper
                   autoplay
                   height={240}
               >
                {
                    this.state.imagesSlider.map((item, i) => <Slider
                        url={item}
                        key={i}
                    />)
                }

                </Swiper>
            </View>
        )
    }
}
