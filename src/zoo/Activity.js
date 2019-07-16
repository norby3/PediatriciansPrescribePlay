import React, { Component } from 'react';
import styles from '../../styles';

import {
  Button,
  Dimensions,
  Text,
  View
 }                          from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSession, completeSession } from '../actions/sessionActions';
import { updateTotalScoreZoo } from '../actions/playerActions';

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
      //zooGoalCounter: 2,     // 2 during testing - speed things up
      zooActivityCounter: 1,
    }
  }

  componentWillMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      // The screen is focused
      console.log('Activity didFocus listener started');
      // Call any action
      this.reloadData();
    });
  }

  reloadData = async() => {
    console.log(`Activity.reloadData started`);

    let session = this.props.sessions[this.props.sessions.length-1];
    console.log(`Activity reloadData session = ${JSON.stringify(session)}`);

    await this.setState({
      zooActivityCounter: session.zooActivityCounter,
      zooAnimalCount: session.zooAnimalCount
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  componentDidMount() {
    console.log(`Activity.js componentDidMount ${Date.now()}`);

  }

  // responsibilities:
  // control coreloop - shows 6 videos and 5 mini breaks
  // when done with coreloop after 6th video:
  //   complete the session
  //   update player scores +1
  //   xfer back to MyZoo

  gotoNext = () => {
    //console.log('Activity.js gotoNext started');

    // two choices - MiniBreak or back to MyZoo
    if(this.state.zooGoalCounter <= this.state.zooActivityCounter) {
      let nowMillis = Date.now();
      let now = new Date(nowMillis);

      this.props.completeSession({
        //zooActivityCounter: this.state.zooActivityCounter + 1,
        zooHasNewAnimal: true,
        zooAnimalCount: this.state.zooAnimalCount + 1,
        finishedAtLocalTimezone: now.toString(),
        finishedAtUTC: now.toUTCString(),
        finishedAtMillis: nowMillis,

      });

      // loop thru session's players - update their score
      let session = this.props.sessions[this.props.sessions.length-1];
      session.players.map((playerName) => {
        this.props.updateTotalScoreZoo({name: playerName, totalScoreZoo: 1});
      });

      this.props.navigation.navigate('MyZoo');
    } else {
      this.props.updateSession({
        zooActivityCounter: this.state.zooActivityCounter + 1,
      });

      this.props.navigation.navigate('MiniBreak',
        { zooAnimalCount: this.state.zooAnimalCount,
          zooActivityCounter: this.state.zooActivityCounter});
    }

  }

  chooseVideo = () => {

    switch(this.state.zooActivityCounter) {
    case 1:
      return(
        <Video source={require('../../assets/videos/mascot_arm_movements.mp4')}
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
        <Video source={require('../../assets/videos/mascot_gavin_jumping_jacks.mp4')}
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
        <Video source={require('../../assets/videos/mascot_boy_squats.mp4')}
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
        <Video source={require('../../assets/videos/mascot_kids_running.mp4')}
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
        <Video source={require('../../assets/videos/mascot_gavin_mtn_climbers.mp4')}
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
        <Video source={require('../../assets/videos/mascot_3kids_dancin.mp4')}
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
        <Video source={require('../../assets/videos/mascot_arm_movements.mp4')}
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
    //console.log(`Activity.js render this.props: ${JSON.stringify(this.props)}`);
    //console.log(`Activity.js render this.state: ${JSON.stringify(this.state)}`);

    return (
      <View style={styles.containerActivity2}>
        <View style={styles.videoView}>

          {this.props.isFocused ? this.chooseVideo() : null}

        </View>

        <View>
          <Text style={styles.coreLoopText1}>Do this &uarr;</Text>
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

Activity.propTypes = {
  updateSession: PropTypes.func.isRequired,
  completeSession: PropTypes.func.isRequired,
  updateTotalScoreZoo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

//export default withNavigationFocus(Activity);
export default connect(mapStateToProps, { updateSession, completeSession, updateTotalScoreZoo })(withNavigationFocus(Activity));
