import React, {Component} from 'react';
import styles from '../../styles'
import { View, StyleSheet } from 'react-native'

import Video from 'react-native-video';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { completeSession } from '../actions/sessionActions';
import { updateTotalScorePlay } from '../actions/playerActions';
import { incrementActivityVideoIndex } from '../actions/viewControlActions';
import { VIDEO_SEQUENCE } from './VideoConstants';

class VideoPlayer extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {}
  // };

  static navigationOptions = {
      header: null
  };

  // componentWillMount() {
  //   this.setState({activityVideoIndex: this.props.viewControl.activityVideoIndex});
  // };

  _gotoNext = () => {
    //console.log('VideoPlayer._gotoNext started');

    let nowMillis = Date.now();
    let now = new Date(nowMillis);

    // completeSession
    this.props.completeSession({
      finishedAtLocalTimezone: now.toString(),
      finishedAtUTC: now.toUTCString(),
      finishedAtMillis: nowMillis,
    });

    // updateTotalScorePlay
    let session = this.props.sessions[this.props.sessions.length-1];
    session.players.map((playerName) => {
      this.props.updateTotalScorePlay({
        name: playerName,
        totalScorePlay: VIDEO_SEQUENCE[this.props.viewControl.activityVideoIndex].points});
    });

    // update viewControl.activityVideoIndex - just +1
    this.props.incrementActivityVideoIndex();

    this.props.navigation.navigate('Scoreboard');
  };

  getVideoComponent = () => {

    const vids = [
      <Video source={require('../../assets/videos/ppp0.mp4')}
        onEnd={() => this._gotoNext()}
        ref={(ref) => {
          this.player = ref
        }}                                      // Store reference
        controls={true}
        fullscreen={true}
        onBuffer={this.onBuffer}                // Callback when remote video is buffering
        onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />,
      <Video source={require('../../assets/videos/ppp1.mp4')}
         onEnd={() => this._gotoNext()}
         ref={(ref) => {
           this.player = ref
         }}
         controls={true}
         fullscreen={true}
         onBuffer={this.onBuffer}
         onError={this.videoError}
         style={styles.backgroundVideo}
      />,
      <Video source={require('../../assets/videos/ppp2.mp4')}
        onEnd={() => this._gotoNext()}
        ref={(ref) => {
          this.player = ref
        }}                                      // Store reference
        controls={true}
        fullscreen={true}
        onBuffer={this.onBuffer}                // Callback when remote video is buffering
        onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />,
      <Video source={require('../../assets/videos/ppp3.mp4')}
        onEnd={() => this._gotoNext()}
        ref={(ref) => {
          this.player = ref
        }}                                      // Store reference
        controls={true}
        fullscreen={true}
        onBuffer={this.onBuffer}                // Callback when remote video is buffering
        onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />,
      <Video source={require('../../assets/videos/ppp4.mp4')}
        onEnd={() => this._gotoNext()}
        ref={(ref) => {
          this.player = ref
        }}                                      // Store reference
        controls={true}
        fullscreen={true}
        onBuffer={this.onBuffer}                // Callback when remote video is buffering
        onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />,
      <Video source={require('../../assets/videos/ppp5.mp4')}
        onEnd={() => this._gotoNext()}
        ref={(ref) => {
          this.player = ref
        }}                                      // Store reference
        controls={true}
        fullscreen={true}
        onBuffer={this.onBuffer}                // Callback when remote video is buffering
        onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />
    ];

    return vids[this.props.viewControl.activityVideoIndex];
  }

  render() {
    console.log(`VideoPlayer.render props: ${JSON.stringify(this.props)}`);

    return (
      <View style={{flex: 1}}>

        { this.getVideoComponent() }

      </View>
    );
  }
}

VideoPlayer.propTypes = {
  completeSession: PropTypes.func.isRequired,
  updateTotalScorePlay: PropTypes.func.isRequired,
  incrementActivityVideoIndex: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

export default connect(mapStateToProps, { completeSession,
  updateTotalScorePlay, incrementActivityVideoIndex })(VideoPlayer);
