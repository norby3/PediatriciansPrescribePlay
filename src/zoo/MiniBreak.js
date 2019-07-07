import React, { Component } from 'react';
import styles from '../../styles';

import {
  Button,
  Dimensions,
  Text,
  View
 }                          from 'react-native';
//import Image from 'react-native-scalable-image';
import {
  Icon,
} from 'react-native-elements';

import { animalGifs }     from './AnimalGifs.js';

//const { width, height } = Dimensions.get('window');

// const horseGif = (
//    <Image
//        width={Dimensions.get('window').width}
//        source={require('../../assets/images/horse.gif')}
//    />
// );


export default class MiniBreak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countdownTimer: 10,
      //coreLoopCounter: 1,
      zooAnimalCount: this.props.navigation.getParam('zooAnimalCount', 1),
      zooActivityCounter: this.props.navigation.getParam('zooActivityCounter', 1),
      coverPadding: this.props.navigation.getParam('zooActivityCounter', 1) * 25,
    }
  }

  static navigationOptions = {
         title: "",
    headerLeft: null,
  };

  componentDidMount() {
    this._interval = setInterval(() => {

      if(this.state.countdownTimer <= 0) {
        this.goBack();
      } else {
        this.setState({countdownTimer: --this.state.countdownTimer});
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  // go back to activity screen
  goBack = () => {
    clearInterval(this._interval);
    this.props.navigation.goBack(null);
  }

  render() {
    console.log(`MiniBreak.js render
        zooActivityCounter: ${this.state.zooActivityCounter}
       coverPadding: ${this.state.coverPadding}`);
    return (
      <View style={styles.container}>

        <View style={styles.breakTimerView}>
          <Text style={styles.coreLoopText1}>Mini Break</Text>
          <Text style={styles.bigText}>{this.state.countdownTimer}</Text>
          <Text style={styles.coreLoopText1}>Guess new animal &darr;</Text>
        </View>

        <View style={styles.gifRevealView}>
          {animalGifs[this.state.zooAnimalCount]}
          <View style={{
            position: 'absolute',
            top: this.state.coverPadding,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 1.0)'
            }}>
          </View>
        </View>
      </View>
    );
  }
}
