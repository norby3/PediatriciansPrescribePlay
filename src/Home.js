import React, {Component} from 'react';
import styles from '../styles';

import {
  Platform, ScrollView, StyleSheet, Text, TextInput,
  TouchableOpacity, View
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setGame } from './actions/viewControlActions';


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

    this.props.setGame({ game: game });

    this.props.navigation.navigate('ChoosePlayers');

  }

  render() {
    console.log(`Home.js this.props: ${JSON.stringify(this.props)}`);
    console.log(`Home.js this.state: ${JSON.stringify(this.state)}`);

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
            <Text style={styles.bigButTxt}>age 5+</Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.wideButton}
            //onPress={(event) => this.handleSubmit(event, "MyPlay")}
            ref={(input) => { this.nextButton = input }}
          >
            <Text style={styles.bigButTxt}>MyPlay</Text>
            <Text style={styles.bigButTxt}>age 8+</Text>
            <Text style={styles.devOnlyText2}>button disabled: still integrating & debugging</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
}

Home.propTypes = {
  setGame: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

//export default connect(mapStateToProps, { newSession })(Home);
export default connect(mapStateToProps, {setGame})(Home);
