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
import { withNavigationFocus } from 'react-navigation';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPlayers } from './actions/viewControlActions';

class ChoosePlayers extends React.Component {
  static navigationOptions = {
         title: 'Choose Players',
         //headerLeft: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      players: [],
      selectedPlayersFirstName: [],
    }
  };

  componentWillMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      // The screen is focused
      console.log('ChoosePlayers didFocus listener started');
      // Call any action
      this.reloadData();
    });
  }

  reloadData = async() => {
    console.log(`ChoosePlayers.reloadData started`);
    await this.setState({players: this.props.players});
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  // playerSelected() {
  //   //console.log(`this.state.phone.length == 10 ${this.state.phone.length == 10}`);
  //
  //   let playerSelected = false;
  //   //if( this.state.players && this.state.players.length > 0 ) {
  //   if(this.state.selectedPlayersFirstName &&
  //      this.state.selectedPlayersFirstName.length >0) {
  //      playerSelected = true;
  //    }
  //    return playerSelected;
  // }
  playerSelected() {
    return this.state.selectedPlayersFirstName.length > 0;
  };

  // isThisPlayerSelected(playerName) {
  //   let isPlayerSel = false;
  //
  //   if (this.state.players && this.state.players.length > 0 ) {
  //       isPlayerSel = this.state.players.includes(playerName);
  //   }
  //   return isPlayerSel;
  // }

  isThisPlayerSelected(playerName) {
    return this.state.selectedPlayersFirstName.includes(playerName);
  };


  //  add or remove the player to state selectedPlayersFirstName
  playerTap = (event, playerName) => {
    console.log(`playerTap event: ${playerName}`);

    let updatedPlayers = [];
    if (this.state.selectedPlayersFirstName.includes(playerName)) {
      // remove the player
      updatedPlayers = this.state.selectedPlayersFirstName.filter(e => e !== playerName);
    } else {
      // add the player
      updatedPlayers = this.state.selectedPlayersFirstName.concat(playerName);
    }
    console.log(`playerTap updatedPlayers: ${JSON.stringify(updatedPlayers)}`);
    this.setState({selectedPlayersFirstName: updatedPlayers});
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
    // update the players in app's state viewControl
    this.props.setPlayers({players: this.state.selectedPlayersFirstName});

    if(this.props.viewControl.game === 'MyZoo') {
      this.props.navigation.navigate('MyZooStack');
    } else {
      this.props.navigation.navigate('MyPlayStack');
    }
  };

  addPlayer = () => {
    //console.log('addPlayer');
    this.props.navigation.navigate('AddPlayer');

  };

  render() {
    console.log(`ChoosePlayers this.props: ${JSON.stringify(this.props)}`);
    console.log(`ChoosePlayers this.state: ${JSON.stringify(this.state)}`);

    return (
      <View style={styles.outerView3}>

          {this.props.viewControl.game === 'MyZoo'?
            this.getPlayerButtonsMyZoo() : this.getPlayerButtonsMyPlay()
          }

          <TouchableOpacity
            style={this.playerSelected()? styles.bigBut2 : [styles.bigBut2, styles.bigBut2disabled] }
            disabled={!this.playerSelected()}
            onPress={(event) => this.gotoNext(event, "GO")}
          >
            <Text style={styles.bigButTxt}>GO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bigBut2}
            onPress={(event) => this.addPlayer(event, "AddPlayer")}
          >
            <Text style={styles.bigButTxt}>Add Player</Text>
          </TouchableOpacity>


      </View>
    );
  }
}

ChoosePlayers.propTypes = {
  setPlayers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  players: state.players,
  viewControl: state.viewControl,
  sessions: state.sessions,
  family: state.family
});

export default connect(mapStateToProps, {setPlayers})(withNavigationFocus(ChoosePlayers));
