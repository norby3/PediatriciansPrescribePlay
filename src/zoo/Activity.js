import React, { Component } from 'react';
import styles from '../../styles';

import {
  Button,
  Dimensions,
  Text,
  View
 }                          from 'react-native';
 // import {
 //   getUserData,
 //   updateZooActivityCounter,
 //   animalAddedToZoo,
 // }                         from '../shared/UserDataFunctions.js';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { updateSession } from '../actions/sessionActions';

import { RNCamera } from 'react-native-camera';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');
const splitPanelHeight = height * 0.40;

//export default class Activity extends Component {
class Activity extends Component {
  static navigationOptions = {
         title: "Follow Me",
    headerLeft: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      zooGoalCounter: 6,
      zooActivityCounter: 1,
    }
  }

  componentWillMount() {

    let session = this.props.sessions[this.props.sessions.length-1];
    console.log(`Activity.js componentWillMount session = ${JSON.stringify(session)}`);

    this.setState({
      zooActivityCounter: session.zooActivityCounter,
      zooAnimalCount: session.zooAnimalCount,
    });

  }

  gotoNext = () => {
    console.log('Activity.js gotoNext started');

    this.props.navigation.navigate('MiniBreak',
      { zooAnimalCount: this.state.zooAnimalCount,
        zooActivityCounter: this.state.zooActivityCounter});
  }


  // gotoNext = async() => {
  //   console.log('Activity.js gotoNext started');
  //
  //   this.setState({zooActivityCounter: this.state.zooActivityCounter + 1});
  //
  //   // two choices - MiniBreak or back to MyZoo
  //   if(this.state.zooGoalCounter === this.state.zooActivityCounter) {
  //     await animalAddedToZoo();
  //     this.props.navigation.navigate('MyZoo');
  //   } else {
  //     await updateZooActivityCounter();
  //     this.props.navigation.navigate('MiniBreak',
  //       { zooAnimalCount: this.state.zooAnimalCount,
  //         zooActivityCounter: this.state.zooActivityCounter});
  //   }
  // }


  chooseVideo = () => {

    switch(this.state.zooActivityCounter) {
    case 1:
      return(
        <Video source={require('../../assets/videos/video1.mov')}
          ref={(ref) => {
            this.player = ref
          }}
          onEnd={this.gotoNext}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={styles.videoScreen}
          //controls={true}
          fullscreen={false}
          resizeMode={'contain'}
        />
      );
      break;
    case 2:
      return(
        <Video source={require('../../assets/videos/video2.mp4')}
          ref={(ref) => {
            this.player = ref
          }}
          onEnd={this.gotoNext}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={styles.videoScreen}
          //controls={true}
          fullscreen={false}
          resizeMode={'contain'}
        />
      );
      break;
    case 3:
      return(
        <Video source={require('../../assets/videos/video3.mp4')}
          ref={(ref) => {
            this.player = ref
          }}
          onEnd={this.gotoNext}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={styles.videoScreen}
          //controls={true}
          fullscreen={false}
          resizeMode={'contain'}
        />
      );
      break;
    case 4:
      return(
        <Video source={require('../../assets/videos/video4.mp4')}
          ref={(ref) => {
            this.player = ref
          }}
          onEnd={this.gotoNext}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={styles.videoScreen}
          //controls={true}
          fullscreen={false}
          resizeMode={'contain'}
        />
      );
      break;
    case 5:
      return(
        <Video source={require('../../assets/videos/video5.mp4')}
          ref={(ref) => {
            this.player = ref
          }}
          onEnd={this.gotoNext}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={styles.videoScreen}
          //controls={true}
          fullscreen={false}
          resizeMode={'contain'}
        />
      );
      break;
    case 6:
      return(
        <Video source={require('../../assets/videos/video6.mp4')}
          ref={(ref) => {
            this.player = ref
          }}
          onEnd={this.gotoNext}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={styles.videoScreen}
          //controls={true}
          fullscreen={false}
          resizeMode={'contain'}
        />
      );
      break;
    default:
      return(
        <Video source={require('../../assets/videos/video1.mp4')}
          ref={(ref) => {
            this.player = ref
          }}
          onEnd={this.gotoNext}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={styles.videoScreen}
          //controls={true}
          fullscreen={false}
          resizeMode={'contain'}
        />
      );
    }
  }

  render() {
    //console.log(`Activity.js render state: ${JSON.stringify(this.state)}`);

    return (
      <View style={styles.containerActivity}>
        <View style={styles.videoView}>

          {this.props.isFocused ? this.chooseVideo() : null}

        </View>

        <View style={styles.cameraView}>
          <RNCamera
             ref={ref => {
               this.camera = ref;
             }}
             style={{flex:1}}
             type={RNCamera.Constants.Type.front}
             captureAudio={false}
          />
        </View>


    </View>
    );
  }
}

//export default withNavigationFocus(Activity);

const mapStateToProps = state => ({
  //family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

export default connect(mapStateToProps, {})(withNavigationFocus(Activity));
