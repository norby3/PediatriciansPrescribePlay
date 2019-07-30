import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../../styles';

import Video from 'react-native-video';
import IntroVid from '../../assets/videos/intro.mp4';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { finishedIntroVideo } from '../actions/viewControlActions';

//export default class IntroVideo extends Component {
class IntroVideo extends Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  }

  gotoNext = () => {
    this.props.finishedIntroVideo();
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={{flex: 1}}>

        <Video source={IntroVid}

           ref={(ref) => {
             this.player = ref
           }}                                      // Store reference
           controls={true}
           fullscreen={true}
           onBuffer={this.onBuffer}                // Callback when remote video is buffering
           onError={this.videoError}               // Callback when video cannot be loaded
           style={styles.backgroundVideo}
           onEnd={this.gotoNext}
           ignoreSilentSwitch={"ignore"}
           />

      </View>
    );
  }
}
IntroVideo.propTypes = {
  finishedIntroVideo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

export default connect(mapStateToProps, {finishedIntroVideo})(IntroVideo);
