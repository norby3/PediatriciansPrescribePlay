import React, {Component} from 'react';
import styles from '../styles';
import {
  Platform, ScrollView, StyleSheet, Text, TextInput,
  TouchableOpacity, View
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newBonusSession } from './actions/bonusSessionsActions';

import { Dimensions }       from 'react-native';
const { width, height } = Dimensions.get('window');

import { Youtube } from 'react-native-openanything';

const danceBonus = [
  {'name': 'Baby Shark', youTubeId: 'XqZsoesa55w'},
  {'name': 'Can\'t Stop the Feeling', youTubeId: 'TgcwKrf8wHM'},

  {'name': 'Hokey Pokey', youTubeId: 'd6d6Avbpjf8'},
  {'name': 'Hat Dance', youTubeId: '3JedVIAeBm0'},

  {'name': 'All In', youTubeId: 'InRpJXnOmoU'},
  {'name': 'Rock Around the Clock', youTubeId: '4uQgwNxFD0Y'},

  {'name': 'Night Fever', youTubeId: '4Esz4ADo-xs'},
  {'name': 'Macarena', youTubeId: 'Nt-0yK9gPv4'},
  {'name': 'Billy Jean', youTubeId: 'dIsLsDXXJUE'},

  {'name': 'September', youTubeId: '_NbBwf0giXg'},

  {'name': 'MMMBop', youTubeId: 'fy2b7XLlbWg'},

  {'name': 'Git Up', youTubeId: 'RssTg_PIoyk'},

]

class DanceBonus extends Component {

  getDanceButtons = () => {
    let numSessions = this.props.sessions.length;
    let danceButtons = [];

    for(let x=0; x<= numSessions; x++ ) {
      danceButtons.push(
        <TouchableOpacity
          key={danceBonus[x].youTubeId}
          style={styles.wideButton3}
          onPress={(event) => this.gotoYoutube(event,
            danceBonus[x].youTubeId,
            danceBonus[x].name
          )}
        >
          <Text style={styles.bigButTxt}> {danceBonus[x].name} </Text>
        </TouchableOpacity>
      );
    }
    return danceButtons;
  };

  gotoYoutube = (event, youTubeId, danceName) => {
    console.log(`DanceBonus.gotoYoutube youTubeId = ${youTubeId} danceName: ${danceName}`);

    let nowMillis = Date.now();
    let now = new Date(nowMillis);

    this.props.newBonusSession({
      danceName: danceName,
      youTubeId: youTubeId,
      createdAtLocalTimezone: now.toString()
    });

    Youtube(youTubeId);

  }

  render() {
    console.log(`DanceBonus.js this.props: ${JSON.stringify(this.props)}`);
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.outerView2}>
        <Text style={styles.coreLoopText1}>Dance Party Bonus</Text>

          { this.getDanceButtons() }


          <Text> </Text>
          <Text>These buttons link to YouTube videos and will open
          the YouTube app.
          </Text>
          <Text> </Text>

          <Text style={styles.devOnlyText2}>
            New dances are added with each complete game session.
            Maximum of 12 dances.
            Dance Party Bonus ends 3 hours after completing a session.
          </Text>

        </View>
      </ScrollView>
    );
  }
}

DanceBonus.propTypes = {
  newBonusSession: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
  bonusSessions: state.bonusSessions,
});

export default connect(mapStateToProps, {newBonusSession})(DanceBonus);
