import React, {Component} from 'react';
import styles from '../styles';
import {
  Platform, ScrollView, StyleSheet, Text, TextInput,
  TouchableOpacity, View
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { tappedDanceBonus } from './actions/viewControlActions';

import { Dimensions }       from 'react-native';
const { width, height } = Dimensions.get('window');

import { Youtube } from 'react-native-openanything';

const danceBonus = [
  {'name': 'Baby Shark', youTubeId: 'XqZsoesa55w'},
  {'name': 'Hokey Pokey', youTubeId: 'd6d6Avbpjf8'},
  {'name': 'Hat Dance', youTubeId: '3JedVIAeBm0'},

  {'name': 'Can\'t Stop the Feeling', youTubeId: 'TgcwKrf8wHM'},
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
          onPress={() => Youtube(danceBonus[x].youTubeId)}
        >
          <Text style={styles.bigButTxt}> {danceBonus[x].name} </Text>
        </TouchableOpacity>
      );
    }
    return danceButtons;
  };

  render() {
    //console.log(`DanceBonus.js this.props: ${JSON.stringify(this.props)}`);
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.outerView2}>
        <Text style={styles.coreLoopText1}>Dance Party Bonus</Text>

          { this.getDanceButtons() }

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

// DanceBonus.propTypes = {
//   tappedDanceBonus: PropTypes.func.isRequired
// };

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

//export default connect(mapStateToProps, {tappedDanceBonus})(DanceBonus);
export default connect(mapStateToProps, {})(DanceBonus);
