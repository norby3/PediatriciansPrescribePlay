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

class ChoosePlayers extends React.Component {
  static navigationOptions = {
         title: 'Choose Players',
         headerLeft: null,
  };

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  playerSelected() {
    //console.log(`this.state.phone.length == 10 ${this.state.phone.length == 10}`);

    let playerSelected = false;
    // if( this.state.session && this.state.session.players.length > 0 ) {
    //    playerSelected = true;
    //  }
     return playerSelected;
  }

  isThisPlayerSelected(playerName) {
    let isPlayerSel = false;

    // if (this.state.session && this.state.session.players.length > 0 ) {
    //     isPlayerSel = this.state.session.players.includes(playerName);
    //   }
    return isPlayerSel;
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
              onPress={(event) => this._playerTap(event, player.name)}
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
              onPress={(event) => this._playerTap(event, player.name)}
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


  playerSelected() {
    //console.log(`this.state.phone.length == 10 ${this.state.phone.length == 10}`);
     return false;
  }



  _gotoNext = async () => {

    // update the players in the session

    //this.props.navigation.navigate('VideoPlayer');

  };


  render() {
    console.log(`ChoosePlayers this.props: ${JSON.stringify(this.props)}`);

    return (
      <View style={styles.outerView3}>

          {this.props.viewControl.game === 'Zoo'?
            this.getPlayerButtonsMyZoo() : this.getPlayerButtonsMyPlay()
          }

          <TouchableOpacity
            style={this.playerSelected()? styles.bigBut2 : [styles.bigBut2, styles.bigBut2disabled] }
            disabled={!this.playerSelected()}
            onPress={(event) => this._gotoNext(event, "Start")}
          >
            <Text style={styles.bigButTxt}>Start</Text>
          </TouchableOpacity>


      </View>
    );
  }
}

ChoosePlayers.propTypes = {
//  setChildInfo: PropTypes.func.isRequired,
//  newPlayer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  players: state.players,
  viewControl: state.viewControl,
  //sessions: state.sessions,

});

export default connect(mapStateToProps, {})(ChoosePlayers);
