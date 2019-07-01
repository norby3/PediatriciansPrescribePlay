import React, {Component} from 'react';
import styles from '../styles';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Button,
  Divider,
} from 'react-native-elements';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPlayersToSession } from './actions/sessionActions';

class ChoosePlayers extends React.Component {
  static navigationOptions = {
         title: 'Choose Players',
         //headerLeft: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      players: [],
      game: '',
    }
  };

  componentWillMount = () => {
    //let game = this.props.sessions[this.props.sessions.length-1].game;
    let session = this.props.sessions[this.props.sessions.length-1];
    console.log(`componentWillMount session = ${JSON.stringify(session)}`);
    this.setState({game: session.game});
  }

  playerSelected() {
    //console.log(`this.state.phone.length == 10 ${this.state.phone.length == 10}`);

    let playerSelected = false;
    if( this.state.players && this.state.players.length > 0 ) {
       playerSelected = true;
     }
     return playerSelected;
  }

  isThisPlayerSelected(playerName) {
    let isPlayerSel = false;

    if (this.state.players && this.state.players.length > 0 ) {
        isPlayerSel = this.state.players.includes(playerName);
    }
    return isPlayerSel;
  }


  //  add or remove the player to state players
  playerTap = (event, playerName) => {
    console.log(`playerTap event: ${playerName}`);

    let updatedPlayers = [];
    if (this.state.players.includes(playerName)) {
      // remove the player
      updatedPlayers = this.state.players.filter(e => e !== playerName);
    } else {
      // add the player
      updatedPlayers = this.state.players.concat(playerName);
    }
    console.log(`playerTap updatedPlayers: ${JSON.stringify(updatedPlayers)}`);
    this.setState({players: updatedPlayers});
  }


  getPlayerButtonsMyZoo = () => {
    if(this.props.players) {
      let buttons = [];
      //this.props.players.map( (player) => {
      Object.values(this.props.players).forEach(player => {
        console.log(`ChoosePlayers.getPlayerButtonsMyZoo player: ${JSON.stringify(player)}`);

        buttons.push(

          <View style={styles.playerScoreRow} key={player.name}>
            <TouchableOpacity
              key={player.name}
              style={this.isThisPlayerSelected(player.name)? styles.playerBut : [styles.playerBut, styles.disabledLook] }
              onPress={(event) => this.playerTap(event, player.name)}
            >
              <Text style={styles.bigButTxt}>{player.name}</Text>
            </TouchableOpacity>
            <Text style={styles.playerScoreName}>{player.totalScoreZoo}</Text>
          </View>
        );
      });
      return buttons;
    }
  }

  getPlayerButtonsMyPlay = () => {
    if(this.props.players) {
      let buttons = [];
      //this.props.players.map( (player) => {
      Object.values(this.props.players).forEach(player => {
        console.log(`ChoosePlayers.getPlayerButtonsMyPlay player: ${JSON.stringify(player)}`);

        buttons.push(

          <View style={styles.playerScoreRow} key={player.name}>
            <TouchableOpacity
              key={player.name}
              style={this.isThisPlayerSelected(player.name)? styles.playerBut : [styles.playerBut, styles.disabledLook] }
              onPress={(event) => this.playerTap(event, player.name)}
            >
              <Text style={styles.bigButTxt}>{player.name}</Text>
            </TouchableOpacity>
            <Text style={styles.playerScoreName}>{player.totalScorePlay}</Text>
          </View>
        );
      });
      return buttons;
    }
  }

  gotoNext = () => {
    // update the players in the session
    this.props.addPlayersToSession(this.state.players);

    if (this.state.game === 'MyZoo') {
      this.props.navigation.navigate('MyZooStack');
    } else {
      this.props.navigation.navigate('MyPlayStack');
    }
  };

  render() {
    console.log(`ChoosePlayers this.props: ${JSON.stringify(this.props)}`);

    return (
      <View style={styles.outerView3}>

          {this.state.game === 'MyZoo'?
            this.getPlayerButtonsMyZoo() : this.getPlayerButtonsMyPlay()
          }

          <TouchableOpacity
            style={this.playerSelected()? styles.bigBut2 : [styles.bigBut2, styles.bigBut2disabled] }
            disabled={!this.playerSelected()}
            onPress={(event) => this.gotoNext(event, "Start")}
          >
            <Text style={styles.bigButTxt}>Start</Text>
          </TouchableOpacity>


      </View>
    );
  }
}

ChoosePlayers.propTypes = {
  addPlayersToSession: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  players: state.players,
  viewControl: state.viewControl,
  sessions: state.sessions,
  family: state.family
});

export default connect(mapStateToProps, {addPlayersToSession})(ChoosePlayers);
