import React, {Component} from 'react';
import styles from '../../styles'
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
}                         from 'react-native';
import {
  Button,
  Divider,
}                         from 'react-native-elements';

//import cLI                from '../../assets/coreLoopInstructions.json';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newSession } from '../actions/sessionActions';
import { VIDEO_SEQUENCE } from './VideoConstants';

const { width, height } = Dimensions.get('window');

class MyPlay extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     //startTimestamp: Date.now(),
  //   }
  // }

  static navigationOptions = {
         title: 'Geisinger',
    //headerLeft: null,
  };

  handleSubmit = () => {
    // create a NEW_SESSION
    let nowMillis = Date.now();
    let now = new Date(nowMillis);

    this.props.newSession({
      game: this.props.viewControl.game,
      players: this.props.viewControl.players,
      createdAtLocalTimezone: now.toString(),
      createdAtUTC: now.toUTCString(),
      createdAtMillis: nowMillis,

      activityVideoFile: 'PPPDemo10.mp4',
      activityVideoPoints: 10,
      myPlayPoints: 10,

    });

    this.props.navigation.navigate('VideoPlayer');
  }


  // // used only in dev & test
  // deleteSessions = async() => {
  //   await deleteSessions();
  // }

  render() {
    console.log(`MyPlay.render props: ${JSON.stringify(this.props)}`);

    return (
        <View style={styles.outerView3}>

            <Text style={styles.coreLoopText1}>Do The Video</Text>
            <Text style={styles.coreLoopText1}>Earn The Points</Text>

            <View style={{alignItems: 'center', width: width, marginVertical: 10}}>
              <Text style={styles.coreLoopTextPoints}>

                { VIDEO_SEQUENCE[this.props.viewControl.activityVideoIndex].points }

              </Text>
            </View>

            <TouchableOpacity
              style={styles.bigBut2}
              onPress={(event) => this.handleSubmit(event, "GO")}
            >
              <Text style={styles.bigButTxt}>GO</Text>
            </TouchableOpacity>

        </View>
    );
  }
}

MyPlay.propTypes = {
  newSession: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

export default connect(mapStateToProps, {newSession})(MyPlay);
