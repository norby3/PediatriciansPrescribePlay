import React, {Component} from 'react';
import styles from '../styles';

import {
  Platform, ScrollView, StyleSheet, Text, TextInput,
  TouchableOpacity, View
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newSession } from './actions/sessionActions';


class Home extends Component {
  static navigationOptions = {
         title: 'Choose Game',
    headerLeft: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      game: '',
    }
  };

  handleSubmit = (event, game) => {
    let nowMillis = Date.now();
    let now = new Date(nowMillis);

    this.props.newSession({
      game: game,
      createdAtLocalTimezone: now.toString(),
      createdAtUTC: now.toUTCString(),
      zooGoalCounter: 6,
      zooActivityCounter: 1,
      zooHasNewAnimal: false,
      zooAnimalCount: 1,
      players: [this.props.players[1].name],
    });

    this.props.navigation.navigate('ChoosePlayers');
  }

  render() {
    console.log(`Home.js this.props: ${JSON.stringify(this.props)}`);

    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.outerView2}>

          <TouchableOpacity
            style={styles.wideButton}
            onPress={(event) => this.handleSubmit(event, "MyZoo")}
            ref={(input) => { this.nextButton = input }}
          >
            <Text style={styles.bigButTxt}>MyZoo</Text>
            <Text style={styles.bigButTxt}>ages 5-8</Text>

          </TouchableOpacity>

          <TouchableOpacity
            //style={styles.wideButton}
            style={[styles.playerBut, styles.disabledLook] }

            onPress={(event) => this.handleSubmit(event, "MyPlay")}
            ref={(input) => { this.nextButton = input }}
          >
            <Text style={styles.bigButTxt}>MyPlay</Text>
            <Text style={styles.bigButTxt}>ages 9-12</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
}
Home.propTypes = {
  newSession: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

export default connect(mapStateToProps, { newSession })(Home);
